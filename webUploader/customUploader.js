/**
 * Created by chenjunj on 2017/7/18 13:56.
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.servyouUploader = factory();
    }
}(this,function () {
    var servyouUploader = {
        showFileList: false,
        showFileProgress: false,
        uploadBtnId: 'uploadBtn',
        pickerBtnId: 'pickerBtn',
        option:{
            // swf文件路径
            swf: 'fex-webuploader/dist/Uploader.swf',
            // 文件接收服务端。
            server: '',
            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '',
            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false
            /*
            * 其余属性根据官方添加或者复写
            * 初始化时直接继承过来
            * */
        },
        uploader: null,
        init: function (option) {
            this.customOption(option);
            this.uploader = WebUploader.create(this.option);
            this.bindUploaderEvent();
            this.customEvent();
            return this.uploader;
        },
        customOption: function (option) {
            if(!option){
                option = {}
            }
            option.pick = '#'+this.pickerBtnId;
            $.extend(this.option,option);
        },
        bindUploaderEvent: function () {
            var _this = this;
            // 当有文件被添加进队列的时候
            this.uploader.on( 'fileQueued', function( file ) {
                _this.fileQueued(file);
            });
            // 文件上传过程中创建进度条实时显示。
            this.uploader.on( 'uploadProgress', function( file, percentage ) {
                _this.uploadProgress(file, percentage);
            });
            this.uploader.on( 'uploadSuccess', function( file ) {
                _this.uploadSuccess(file);
            });
            this.uploader.on( 'uploadError', function( file ) {
                _this.uploadError(file);
            });
            this.uploader.on( 'uploadComplete', function( file ) {
                _this.uploadComplete(file);
            });
            this.uploader.on('uploadBeforeSend', function (object , data  ,headers ) {
                console.log(data);
            });
        },
        customEvent: function () {
            var _this = this;
            $('#'+this.pickerBtnId).click(function () {
                _this.uploader.upload();
            });
        },
        fileQueued: function (file) {
            if(this.showFileList){
                this.appendIntoList();
            }
            $('#uploadList').append('<div id="' + file.id + '" class="item">' +
                '<h4 class="info">' + file.name + '</h4>' +
                '<p class="state">等待上传...</p>' +
                '<p class="del">删除</p>' +
                '</div>');
        },
        uploadProgress: function (file,percentage) {
            var $li = $( '#'+file.id ),
                $percent = $li.find('.progress .progress-bar');
            // 避免重复创建
            if ( !$percent.length ) {
                $percent = $('<div class="progress progress-striped active">' +
                    '<div class="progress-bar" role="progressbar" style="width: 0%">' +
                    '</div>' +
                    '</div>').appendTo( $li ).find('.progress-bar');
            }
            $li.find('p.state').text('上传中');
            $percent.css( 'width', percentage * 100 + '%' );
        },
        uploadSuccess: function (file) {},
        uploadError: function (file) {},
        uploadComplete: function (file) {},
        deleteFile: function (file) {},
        showUploadProgress: function () {
            
        }
    };
    return servyouUploader;
}));