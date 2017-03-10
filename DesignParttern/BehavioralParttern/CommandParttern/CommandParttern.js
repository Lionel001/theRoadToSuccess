/**
 * Created by chenjunj on 2017/2/5.
 */

/*
* 命令模式
* 特征：命令的发起和执行解耦合
* */

var Services = {
	clean: function () {
		console.log("打扫卫生");
	}, consult: function () {
		console.log("咨询");
	}
};
var ServcieCommand = function () {
	return {
		execute: function (receiver, command) {
			receiver[command]();
		}
	}
}();
ServcieCommand.execute(Services,'clean');