import $ from 'jquery';
import WebUploader from 'webuploader';
import 'webuploader/css/webuploader.css'

let $list = $('#thelist'); // 存放文件的列表

let uploader = WebUploader.create({
    auto: false, // 选完文件后，是否自动上传

    swf: 'webuploader/dist/Uploader.swf',   // swf文件路径

    // 文件接收服务端。
    server: 'http://webuploader.duapp.com/server/fileupload.php',

    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#picker',

    // 拖拽容器
    dnd: '.dnd',

    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
    resize: false,

    fileNumLimit: 8, //限制上传个数
    fileSingleSizeLimit: 2048000 //限制单个上传图片的大小
});

// 当有文件被添加进队列的时候
uploader.on('fileQueued', function (file) {
    $list.append('<div id="' + file.id + '" class="item">' +
        '<h4 class="info">' + file.name + '</h4>' +
        '<p class="state">等待上传...</p>' +
        '</div>');
});

// 文件上传过程中创建进度条实时显示。
uploader.on('uploadProgress', function (file, percentage) {
    let $li = $('#' + file.id),
        $percent = $li.find('.progress .progress-bar');

    // 避免重复创建
    if (!$percent.length) {
        $percent = $('<div class="progress progress-striped active">' +
            '<div class="progress-bar" role="progressbar" style="width: 0%">' +
            '</div>' +
            '</div>').appendTo($li).find('.progress-bar');
    }

    $li.find('p.state').text('上传中');

    $percent.css('width', percentage * 100 + '%');
});

//文件成功、失败处理
uploader.on('uploadSuccess', function (file) {
    $('#' + file.id).find('p.state').text('已上传');
});

uploader.on('uploadError', function (file) {
    $('#' + file.id).find('p.state').text('上传出错');
});

uploader.on('uploadComplete', function (file) {
    $('#' + file.id).find('.progress').fadeOut();
});