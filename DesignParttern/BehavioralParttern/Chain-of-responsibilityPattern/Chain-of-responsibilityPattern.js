/**
 * Created by chenjunj on 2017/2/5.
 */

/*
* 责任链模式
* 特征：每个节点仅知道下线，最终执行者未知
* 注意：1.可能出现无人处理的情况
* 		2.调试困难,所有需要多打日志
 * */

var Hotel = function () {
	this.on("fight", function () {
		if (this.canDo()) {
			//内部处理
			this.do();
		}else{
			//报警
			Police.do();
		}
	});
};

Police = function () {
	return {
		do: function () {
			if (this.canDo()) {
				console.log("over");
			} else {
			//TODO 转上级处理。。。
			}
		}
	}
}();
