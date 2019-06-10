import $ from 'jquery';
import WebUploader from 'webuploader';
import 'webuploader/css/webuploader.css'

(function () {

    /* -- 变量定义 -- */
    let $list = $('#thelist'), // 存放文件的列表
        $btnUpload = $('#ctlBtn'), // 开始上传的按钮
        $tips = $list.find(".tips"),
        $dnd = $('#dndBox'),
        state = 'pending', // 文件状态
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
        // 隐藏提示拖动
        $tips.hide();
        $dnd.removeClass('dnd-bd');

        // 生成文件列表
        let $file = $(`<div id="${file.id}" class="item">
        <span class="delete">删除</span>
        <span class="info"> ${file.name} </span>
        <span class="state">等待上传...</span>
        </div>`).appendTo($list);

        // 绑定删除事件
        $file.on('click', '.delete', function () {
            uploader.removeFile(file);
            $file.remove();
        });
    });

    /* -- 文件上传过程中创建进度条实时显示。-- */
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
    });

    /* -- 文件成功、失败处理 -- */
    uploader.on('uploadSuccess', function (file) {
        let fileDom = $('#' + file.id), // 文件盒子
            stateDom = fileDom.find('.state'), // 状态盒子
            deleteDom = fileDom.find('.delete'); // 删除按钮
        stateDom.text('上传成功');
        stateDom.addClass('success');
        deleteDom.remove();
    });

    uploader.on('uploadError', function (file) {
        let stateDom = $('#' + file.id).find('.state');
        stateDom.text('上传出错');
        stateDom.addClass('error');
    });

    uploader.on('uploadComplete', function (file) {
        $('#' + file.id).find('.progress').fadeOut();
    });

    /* -- 开始上传按钮 -- */
    $btnUpload.on('click', function () {
        uploader.upload();
    });
})();

