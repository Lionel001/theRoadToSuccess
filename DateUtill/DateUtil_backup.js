/**
 * Created by chenjunj on 2016/11/23.
 */
/*重写Date 解决IE8及以下  无法new Date('2011-11-11')的问题*/
var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=b_version.split(";");
var trim_Version=version[1].replace(/[ ]/g,"");
if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0"){
    var nativeDate = Date;
    Date = function(o){
        if (arguments.length === 1 && typeof o === 'string') {
            if(/^\d{4}-\d{2}-\d{2}$/.test(o)){
                o = o.replace(/-/g,'/');
            }
            return new nativeDate(o);
        }
        if (arguments.length > 1) {
            var t = [];
            for (var j = 0; j < arguments.length; j++) {
                t.push(arguments[j]);
            }
            o = t.join(',');
        }
        return eval('new nativeDate(' + (o || '') + ')');
    };
    Date.prototype = nativeDate.prototype;
}
/*
* 日期格式化
* @param Date date,String formatStr
* @returns String
* */
Date.prototype.format = function (formatStr) {
	var year = this.getFullYear();
	var month = this.getMonth()+1;
	var day = this.getDate();
	var hours = this.getHours()<10?'0'+this.getHours():this.getHours();
	var minutes = this.getMinutes()<10?'0'+this.getMinutes():this.getMinutes();
	var seconds = this.getSeconds()<10?'0'+this.getSeconds():this.getSeconds();
	if(formatStr === 'yyyy/M/d'){
		return year+'/'+month+'/'+day;
	}
	if(formatStr === 'yyyy/M/d hh:mm'){
		return year+'/'+month+'/'+day+' '+hours+':'+minutes;
	}
	if(formatStr === 'yyyy/M/d hh:mm:ss'){
		return year+'/'+month+'/'+day+' '+hours+':'+minutes+':'+seconds;
	}
	if(formatStr === 'yyyy/MM/dd'){
		month = month<10?'0'+month:month;
		day = day<10?'0'+day:day;
		return year+'/'+month+'/'+day;
	}
	if(formatStr === 'yyyy/MM/dd hh:mm'){
		month = month<10?'0'+month:month;
		day = day<10?'0'+day:day;
		return year+'/'+month+'/'+day+' '+hours+':'+minutes;
	}
	if(formatStr === 'yyyy/MM/dd hh:mm:ss'){
		month = month<10?'0'+month:month;
		day = day<10?'0'+day:day;
		return year+'/'+month+'/'+day+' '+hours+':'+minutes+':'+seconds;
	}
	if(formatStr === 'yyyy-M-d'){
		return year+'-'+month+'-'+day;
	}
	if(formatStr === 'yyyy-M-d hh:mm'){
		return year+'-'+month+'-'+day+' '+hours+':'+minutes;
	}
	if(formatStr === 'yyyy-M-d hh:mm:ss'){
		return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
	}
	if(formatStr === 'yyyy-MM-dd'){
		month = month<10?'0'+month:month;
		day = day<10?'0'+day:day;
		return year+'-'+month+'-'+day;
	}
	if(formatStr === 'yyyy-MM-dd hh:mm'){
		month = month<10?'0'+month:month;
		day = day<10?'0'+day:day;
		return year+'-'+month+'-'+day+' '+hours+':'+minutes;
	}
	if(formatStr === 'yyyy-MM-dd hh:mm:ss'){
		month = month<10?'0'+month:month;
		day = day<10?'0'+day:day;
		return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
	}
	if(formatStr === 'yyyy.M.d'){
		return year+'.'+month+'.'+day;
	}
	if(formatStr === 'yyyy.M.d hh:mm'){
		return year+'.'+month+'.'+day+' '+hours+':'+minutes;
	}
	if(formatStr === 'yyyy.M.d hh:mm:ss'){
		return year+'.'+month+'.'+day+' '+hours+':'+minutes+':'+seconds;
	}
};
/*
* 获取当月第一天
* @param [formatStr]
* reutrn Date/String
* */
Date.prototype.getFirstDateOfMonth = function (formatStr) {
	this.setDate(1);
	if(formatStr){
		return this.format(formatStr);
	}
	return this;
};
/*
 * 获取当月最后一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getLastDateOfMonth = function (formatStr) {
	var year = this.getFullYear();
	var month = this.getMonth()+1;
	if(formatStr){
		return new Date(year,month,0).format(formatStr);
	}
	return new Date(year,month,0);
};
/*
 * 获取下个月的第一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getFirstDateOfNextMonth = function (formatStr) {
	if(formatStr){
		return new Date(this.getLastDateOfMonth().getTime()+24*60*60*1000).format(formatStr);
	}
	return new Date(this.getLastDateOfMonth().getTime()+24*60*60*1000);
};
/*
 * 获取下个月的最后一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getLastDateOfNextMonth = function(formatStr){
	if(formatStr){//还有问题。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		return this.getFirstDateOfNextMonth().getLastDateOfMonth(formatStr);
	}
	return this.getFirstDateOfNextMonth().getLastDateOfMonth();
};
/*
 * 获取上个月的第一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getFirstDateOfPrevMonth = function (formatStr) {
	if(formatStr){
		return new Date(this.getFirstDateOfMonth().getTime()-24*60*60*1000).getFirstDateOfMonth(formatStr);
	}
	return new Date(this.getLastDateOfMonth().getTime()+24*60*60*1000);
};
/*
 * 获取上个月的最后一天
 * @param [formatStr]
 * reutrn Date/String
 * */
Date.prototype.getLastDateOfPrevMonth = function(formatStr){
	if(formatStr){//还有问题。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
		return new Date(this.getFirstDateOfMonth().getTime()-24*60*60*1000).format(formatStr);
	}
	return new Date(this.getFirstDateOfMonth().getTime()-24*60*60*1000);
};
/*
 * 获取本年第一季度的起止日期
 * @param [formatStr]
 * reutrn Array
 * */
Date.prototype.getDatesOfFirstSeason = function (formatStr) {
	var year = this.getFullYear();
	var beginDate = new Date(year,0,1);
	var endDate = new Date(year,2,31);
	if(formatStr){
		return [beginDate.format(formatStr),endDate.format(formatStr)];
	}
	return [beginDate,endDate];
};
/*
 * 获取本年第二季度的起止日期
 * @param [formatStr]
 * reutrn Array
 * */
Date.prototype.getDatesOfSecondSeason = function (formatStr) {
	var year = this.getFullYear();
	var beginDate = new Date(year,3,1);
	var endDate = new Date(year,5,30);
	if(formatStr){
		return [beginDate.format(formatStr),endDate.format(formatStr)];
	}
	return [beginDate,endDate];
};
/*
 * 获取本年第三季度的起止日期
 * @param [formatStr]
 * reutrn Array
 * */
Date.prototype.getDatesOfThirdSeason = function (formatStr) {
	var year = this.getFullYear();
	var beginDate = new Date(year,6,1);
	var endDate = new Date(year,8,30);
	if(formatStr){
		return [beginDate.format(formatStr),endDate.format(formatStr)];
	}
	return [beginDate,endDate];
};
/*
 * 获取本年第四季度的起止日期
 * @param [formatStr]
 * reutrn Array
 * */
Date.prototype.getDatesOfForthSeason = function (formatStr) {
	var year = this.getFullYear();
	var beginDate = new Date(year,9,1);
	var endDate = new Date(year,11,31);
	if(formatStr){
		return [beginDate.format(formatStr),endDate.format(formatStr)];
	}
	return [beginDate,endDate];
};
/*
* 日期比较-早于
* */
Date.prototype.earlierThan = function (date) {
	var thisTime = this.getTime();
	var dateTime;
	if(typeof date === 'number'){
		dateTime = new Date(parseInt(date)).getTime();
	}else if(typeof date === 'string'){
		dateTime = new Date(date).getTime();
	}else if(typeof date === 'object' && date.constructor.name === 'Date'){
		dateTime = date.getTime();
	}
	return thisTime<dateTime;
};
/*
 * 日期比较-晚于
 * @param Int/String/Date date
 * @return boolean
 * */
Date.prototype.laterThan = function (date) {
	var thisTime = this.getTime();
	var dateTime;
	if(typeof date === 'number'){
		dateTime = new Date(parseInt(date)).getTime();
	}else if(typeof date === 'string'){
		dateTime = new Date(date).getTime();
	}else if(typeof date === 'object' && date.constructor.name === 'Date'){
		dateTime = date.getTime();
	}
	return thisTime>dateTime;
};
/*
* 获取本地时间
* @return Date
* */
Date.localDate = null;
Date.getLocalDate = function(formatStr){
	if(formatStr){
        Date.localDate = new Date().format(formatStr);

	}else{
        Date.localDate = new Date();
	}
    return  Date.localDate;
};
/*
 * 获取服务器时间-----------------------------------------------------接口待定
 * @return Date
 * */
Date.serverDate = null;
Date.getServerDate = function(formatStr,url){
	var _url='/sb/sbcommon_checkCwbbSbqkFromGt3.do';
	if(!!url){
        _url = url;
	}
	if(!Date.serverDate){
		$.ajax({
			url : _url,
			async : false,
			type : "GET",
			data : {}
		}).success(function (result) {
            Date.serverDate = result;
		}).error(function () {
            console.log('获取服务器时间失败！');
		});
	}
	if(!!formatStr){
        Date.serverDate =  Date.serverDate.format(formatStr);
	}
	return Date.serverDate;
};

