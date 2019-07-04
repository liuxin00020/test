import $ from 'jquery';
import WebUploader from 'webuploader';
import 'webuploader/css/webuploader.css'

(function () {

    /* -- 变量定义 -- */
    let $dnd = $('#dndBox'), // 拖拽框
        $list = $dnd.find('#thelist'), // 存放文件的列表
        $statusBar = $dnd.find('.status-bar'), // 状态栏
        $btnUpload = $statusBar.find('#ctlBtn'), // 开始上传的按钮
        $process = $statusBar.find('.process'), // 开始上传的按钮
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
        <div class="progress">
           <span class="progress-bar" role="progressbar" style="width: 0%"></span>
        </div>
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

        statusChange(file);// 文件状态绑定
        updateTotalBar(); // 刷新全局进度条
        // 隐藏提示拖动
        setState('ready');
    });

    /* -- 单个文件上传过程中创建进度条实时显示。-- */
    uploader.on('uploadProgress', function (file, percentage) {
        let $item = $('#' + file.id),
            $percent = $item.find('.progress .progress-bar');

        $item.find('.state').text('上传中');
        $percent.css('width', percentage * 100 + '%');
        !$percent.parent().hasClass("active") ? $percent.parent().addClass("active") : false;
        // 全局进度条
        totalPercent[file.id] = [file.size, percentage];
        updateTotalBar();
    });

    /* -- 全局状态监听 -- */
    uploader.on('all', function (type, file, percent) {
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
        } else if (state == 'ready' || state == 'paused') { // 继续上传
            uploader.upload();
        }
    });

    /* -- 重新上传，或忽略失败文件 -- */
    $tipInfo.on('click', 'span', function () {
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

        switch (state) {
            case 'pending': // 初始状态
                $dnd.addClass("dnd-bd"); // 加虚线
                $process.removeClass("active");
                $btnUpload.removeClass("active")
                $tipInfo.removeClass("active");
                $list.find('.item').remove(); // 删除队列dom
                uploader.reset(); // 重置队列，已上传成功的可以再上传
                uploader.refresh();
                break;

            case 'ready': // 待上传
                $dnd.removeClass("dnd-bd");
                $process.removeClass("active");
                $tipInfo.removeClass("active");
                $btnUpload.text("开始上传");
                $btnUpload.addClass("active");
                uploader.refresh();
                break;

            case 'uploading': // 正在上传
                $process.addClass("active");
                $tipInfo.removeClass("active");
                $btnUpload.addClass("active");
                $btnUpload.text("暂停上传");
                break;

            case 'paused': // 暂停
                $btnUpload.text("继续上传");
                break;

            case 'finish':
                $tipInfo.addClass("active");
                let stats = uploader.getStats(),
                    state = "",
                    tipInfo = "";// 进度条旁边提示文本
                if (stats.successNum && (!stats.uploadFailNum)) {
                    tipInfo = `${stats.successNum}个文件，全部上传成功`;
                    state = 'pending'; // 回到初始状态
                } else {
                    tipInfo = `${stats.uploadFailNum}个文件上传失败，<span>重新上传</span>或<span>忽略</span>`
                    state = 'error';
                }
                $tipInfo.html(tipInfo);
                setState(state); // 回到初始状态
                break;
            case 'error':
                $process.removeClass("active");
                $process.find(".process-bar").width(0);
                $process.find(".process-text").text('0%');
                $btnUpload.removeClass("active")
                uploader.refresh();
        }
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

    /**
     * 文件状态函数
     * @param file 文件对象
     */
    function statusChange(file) {
        file.on('statuschange', function (cur, prev) {
            let $file = $('#' + file.id),
                stateText = "等待上传...",
                stateClass = "item-state ",
                barClass = "progress-bar ";

            if (cur === 'queued') { // 进入队列
                totalPercent[file.id][1] = 0;
            } else if (cur === 'error' || cur === 'invalid') { // 错误
                totalPercent[file.id][1] = 1;
                stateText = "上传出错";
                stateClass += "item-state-error";
                barClass += "bar-error";
            } else if (cur === 'complete') { // 上传完成，更改状态
                $('#' + file.id).find('.item-delete').remove(); // 删除
                stateText = "上传成功";
                stateClass += "item-state-success";
                barClass += "bar-success";
            }

            $file.find('.item-state').text(stateText);
            $file.find('.item-state').attr('class', stateClass);
            $file.find('.progress-bar').attr('class', barClass);
        });
    }
})();

