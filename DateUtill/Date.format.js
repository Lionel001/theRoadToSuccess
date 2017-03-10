/**
 * Created by Lionel on 2017/2/19 16:02.
 */
Date.prototype.format = function(format){
    var o = {
        "M+" : this.getMonth()+1, //month 月
        "d+" : this.getDate(), //day 日
        "h+" : this.getHours(), //hour 时
        "m+" : this.getMinutes(), //minute 分
        "s+" : this.getSeconds(), //second 秒
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter季度
        "S" : this.getMilliseconds() //millisecond毫秒
    };

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
};
Date.prototype.dateDiff = function(interval,objDate2){
    var d=this, i={}, t=d.getTime(), t2=objDate2.getTime();
    i['y']=objDate2.getFullYear()-d.getFullYear();
    i['q']=i['y']*4+Math.floor(objDate2.getMonth()/4)-Math.floor(d.getMonth()/4);
    i['m']=i['y']*12+objDate2.getMonth()-d.getMonth();
    i['ms']=objDate2.getTime()-d.getTime();
    i['w']=Math.floor((t2+345600000)/(604800000))-Math.floor((t+345600000)/(604800000));
    i['d']=Math.floor(t2/86400000)-Math.floor(t/86400000);
    i['h']=Math.floor(t2/3600000)-Math.floor(t/3600000);
    i['n']=Math.floor(t2/60000)-Math.floor(t/60000);
    i['s']=Math.floor(t2/1000)-Math.floor(t/1000);
    return i[interval];
};
var d = new Date();
alert(d.format('yyyy-MM-dd'));