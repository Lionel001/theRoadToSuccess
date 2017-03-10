/**
 * Created by chenjunj on 2017/1/24.
 */
	/*
	* 特征：全局唯一实例，不会产生第二个
	* 优点：1.唯一实例，能节省系统资源，提高性能（所有隐私属性，都放到内部，如下例中的tip）
	* 		2.命名空间,能减少全局变量的数量
	* 使用场景：1.一个类只有一个实例，切提供了全局访问接口
	* 			2.资源共享的情况下，避免性能或其他损耗，如计数器，配置
	* 			3.资源控制的情况下，方便资源之间的互相通信，如线程池
	* */
var createTip = function () {
	var tip;
	return function () {
		if(!tip){
			tip = document.body.appendChild(document.createElement('div'));
			tip.innerHTML = 'this is a tip...';
		}
		return tip;
	}
}();

$(function () {
	$('#tipBtn').click(function () {
		var tip = createTip();
		$(tip).show();
	});
});
