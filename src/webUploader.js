import $ from 'jquery';
import WebUploader from 'webuploader';
import 'webuploader/css/webuploader.css'

(function () {

    /* -- 变量定义 -- */
    let $dnd = $('#dndBox'), // 拖拽框
        $list = $dnd.find('#thelist'), // 存放文件的列表
        $statusBar = $dnd.find('.status-bar'), // 状态栏
        $btnUpload = $statusBar.find('#ctlBtn'), // 开始上传的按钮
        $tipInfo = $statusBar.find('.tip-info'), // 上传错误提示
        state = 'pending', // 全局状态 pending（初始状态）,ready（等待上传）,uploading（上传中）,paused（暂停）,finish（上传完成）
        totalPercent = {}, // 存储文件进度，用于总进度条展示 {fileId:[fileSize,filePercent]}
        uploader; // WebUploader实例

    /* -- 初始化WebUploader实例 -- */
    uploader = WebUploader.create({
        // auto: false, // 选完文件后，是否自动上传
        swf: 'webuploader/dist/Uploader.swf',   // swf文件路径

        // 文件接收服务端。
        server: 'http://localhost:8088/uploader/php/fileupload.php',

        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#picker',

        // 拖拽容器
        dnd: '#dndBox',

        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false,

        fileNumLimit: 100, //限制上传个数
        fileSingleSizeLimit: 2048000 //限制单个上传图片的大小
    });

    /* --  当有文件被添加进队列的时候 -- */
    uploader.on('fileQueued', function (file) {
        // 生成文件列表
        let $file = $(`<div id="${file.id}" class="item">
        <span class="item-delete" title="删除">X</span>
        <span class="item-info"> ${file.name} </span>
        <span class="item-state">等待上传...</span>
        </div>`).appendTo($list);

        // 绑定删除事件
        $file.one('click', '.item-delete', function () {
            uploader.removeFile(file, true); // 队列中一并删除
            $file.remove(); // 清除html
            delete totalPercent[file.id];
            updateTotalBar();
        });

        // 总进度条
        totalPercent[file.id] = [file.size, 0];
        updateTotalBar();

        // 文件状态绑定
        file.on('statuschange', function (cur, prev) {
            if (cur === 'error' || cur === 'invalid') { // 错误
                totalPercent[file.id][1] = 1;
            } else if (cur === 'queued') {
                totalPercent[file.id][1] = 0;
            }
        });

        // 隐藏提示拖动
        setState('ready');
    });

    /* -- 单个文件上传过程中创建进度条实时显示。-- */
    uploader.on('uploadProgress', function (file, percentage) {
        let $item = $('#' + file.id),
            $percent = $item.find('.progress .progress-bar');

        // 避免重复创建
        if (!$percent.length) {
            $percent = $(`<div class="progress progress-striped active">
           <span class="progress-bar" role="progressbar" style="width: 0%"></span>
           </div>`).appendTo($item).find('.progress-bar');
        }

        $item.find('.state').text('上传中');

        $percent.css('width', percentage * 100 + '%');
        // 全局进度条
        totalPercent[file.id] = [file.size, percentage];
        updateTotalBar();
    });

    uploader.on('uploadSuccess', function (file) {
        let $item = $('#' + file.id), // 文件盒子
            $state = $item.find('.item-state'), // 状态盒子
            $delete = $item.find('.item-delete'), // 删除按钮
            $percent = $item.find('.progress .progress-bar'); // 单个文件进度条
        $state.text('上传成功');
        $state.addClass('item-state-success');
        $percent.removeClass('bar-error');
        $delete.remove();
    });

    uploader.on('uploadError', function (file) {
        let $item = $('#' + file.id), // 文件盒子
            $state = $item.find('.item-state'),
            $percent = $item.find('.progress .progress-bar'); // 单个文件进度条
        $state.text('上传出错');
        $state.addClass('item-state-error');
        $percent.addClass('bar-error');
    });

    /* -- 全局状态监听 -- */
    uploader.on('all', function (type) {
        switch (type) {
            // 整体状态控制
            case 'uploadFinished':
                setState('finish');
                break;

            case 'startUpload':
                setState('uploading');
                break;

            case 'stopUpload':
                setState('paused');
                break;
        }
    });

    /* -- 开始上传按钮 -- */
    $btnUpload.on('click', function () {
        if (state == 'uploading') { // 暂停
            uploader.stop();
            setState('paused');
        } else if (state == 'ready' || state == 'paused') { // 继续上传
            uploader.upload();
            setState('uploading');
        }
    });

    /* -- 重新上传，或忽略失败文件 -- */
    $statusBar.on('click', '.tip-info span', function () {
        if ($(this).text() == '重新上传') {
            uploader.retry();
        } else {
            setState('pending');
            uploader.reset(); // 忽略则重置队列
        }
    });

    /**
     * 设置全局状态
     * @param val
     */
    function setState(val) {
        if (val === state) { // 状态未改变，直接返回
            return;
        }
        $btnUpload.removeClass("state-" + state);
        $btnUpload.addClass("state-" + val);
        state = val; // 赋值给全局变量，state

        let tipInfo = ''; // 进度条旁边提示文本

        switch (state) {
            case 'pending': // 初始状态
                $dnd.addClass("dnd-bd"); // 加虚线
                $list.find('.item').remove();
                $statusBar.addClass("status-bar-hide"); // 进度条
                $btnUpload.hide();
                uploader.refresh();
                tipInfo = "";
                break;

            case 'ready': // 待上传
                $dnd.removeClass("dnd-bd");
                $statusBar.addClass("status-bar-hide");
                $btnUpload.text("开始上传");
                $btnUpload.show();
                uploader.refresh();
                tipInfo = "";
                break;

            case 'uploading': // 正在上传
                $statusBar.removeClass("status-bar-hide");
                $btnUpload.text("暂停上传");
                break;

            case 'paused': // 暂停
                $btnUpload.text("继续上传");
                break;

            case 'finish':
                let stats = uploader.getStats();
                if (stats.successNum && (!stats.uploadFailNum)) {
                    tipInfo = `${stats.successNum}个文件，全部上传成功`;
                    setState('pending'); // 回到初始状态
                } else {
                    tipInfo = `${stats.uploadFailNum}个文件上传失败，<span>重新上传</span>或<span>忽略</span>`
                }
                break;
        }
        $tipInfo.html(tipInfo);
    }

    /**
     * 总进度条
     */
    function updateTotalBar() {
        let totalSize = 0, // 文件总大小
            loadSize = 0; // 已经上传的文件大小
        $.each(totalPercent, function (i, v) {
            totalSize += v[0];
            loadSize += v[0] * v[1];
        });
        let percent = Math.round((totalSize ? (loadSize / totalSize) : 0) * 100) + '%';
        $statusBar.find(".process-bar").width(percent);
        $statusBar.find(".process-text").text(percent);
    }
})();

