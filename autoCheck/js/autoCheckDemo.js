var checkConfig = {
    /*按钮文字*/
    finalBtnText: '确定',
    /*每一步各状态描述*/
    checkList: [
        {
            'unchecked':'检测身体状况',
            'checking':'正在检测身体状况...',
            'checked':'身体检测状况完成'
        },
        {
            'unchecked':'检测精神状况',
            'checking':'正在检测精神状况...',
            'checked':'检测精神状况完成'
        },
        {
            'unchecked':'检测智商等级',
            'checking':'正在检测智商等级...',
            'checked':'检测智商等级完成'
        },
        {
            'unchecked':'检测技术能力',
            'checking':'正在检测技术能力...',
            'checked':'检测技术能力完成'
        }
    ],
    /*是否显示按钮*/
    isShowFinalBtn: true,
    /*执行结束后的回调函数*/
    callback: function () {
        alert('检测对象真的是一个人才！');
    },
    /*是否自动执行回调函数*/
    isAutoRunCallback: false,
    /*每一步的时间间隔*/
    timeGap: 1000

};
AutoCheck.run(checkConfig);