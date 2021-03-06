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
        root.AutoCheck = factory();
    }
}(this, function () {
    var Check = function (checkConfig) {
        this.id = 'autoCheckModal';
        this.isShowFinalBtn = checkConfig['isShowFinalBtn'] === 'undefined'?true:checkConfig['isShowFinalBtn'];
        this.finalBtnText = checkConfig['finalBtnText'];
        this.checkList = checkConfig['checkList'];
        this.callback = checkConfig['callback'];
        this.curStep = 0;
        this.curStatus = 'checking';
        this.isAutoRunCallback = checkConfig['isAutoRunCallback'] === 'undefined'?false:checkConfig['isAutoRunCallback'];
        this.timeGap = checkConfig['timeGap'];
    };
    Check.prototype.run = function () {
        if(this.checkList && this.checkList instanceof Array && this.checkList.length > 0){
            this.createHtml();
            this.doCheck();
        }
    };
    Check.prototype.createHtml = function () {
        if(!this.finalBtnText || typeof this.finalBtnText !== 'string'){
            this.finalBtnText = '确定';
        }
        var modal = '<div class="modal" id="'+this.id+'">'
                        +'<div class="modal-content">'
                            +'<div class="check-box">'
                                +'<ul class="check-list"></ul>';
        if(this.isShowFinalBtn){
            modal += '<div class="check-bottom">'
                        +'<a class="check-btn">'+this.finalBtnText+'</a>'
                    +'</div>';
        }
        modal +=  '</div></div></div>';
        $('body').append(modal);
        var that = this;
        $.each(this.checkList, function (i) {
            var li = '<li class="'+(i===0?'checking':'unchecked')+'"><span class="check-icon">'+(i+1)+'</span><span class="check-text">'+(i===0?this.checking:this.unchecked)+'</span></li>';
            $('#'+that.id).find('.check-list').append(li);
        });
    };
    Check.prototype.doCheck = function () {
        (function(that){
            var timeGap = 1000;
            if(that.timeGap && parseInt(that.timeGap) === parseInt(that.timeGap)){
                timeGap = that.timeGap;
            }
            var doCheck = setInterval(function () {
                var curLi = $('#'+that.id).find('.check-list li').eq(that.curStep);
                curLi.find('.check-icon').html('');
                curLi.find('.check-text').html(that.checkList[that.curStep].checked);
                curLi.attr('class','checked');
                that.curStep++;
                if(that.checkList[that.curStep]){
                    var nextLi = $('#'+that.id).find('.check-list li').eq(that.curStep);
                    nextLi.find('.check-text').html(that.checkList[that.curStep].checking);
                    nextLi.attr('class','checking');
                }else{
                    if(that.isAutoRunCallback){
                        that.callback();
                        that.destroy();
                    }else{
                        $('#'+that.id).find('.check-btn').addClass('active').click(function () {
                            if(that.callback && typeof that.callback === 'function'){
                                that.callback();
                                that.destroy();
                            }
                        });
                    }
                    window.clearInterval(doCheck);
                }
            },timeGap);
        })(this);
    };
    Check.prototype.destroy = function () {
        $('#'+this.id).remove();
    };
    return {
        run: function (checkConfig) {
            var check = new Check(checkConfig);
            check.run();
        }
    };
}));