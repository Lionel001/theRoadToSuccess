/**
 * Created by chenjunj on 2016/10/5.
 */
var window = {};
(function train(){
	var tickets= 50;
	window.addTickets  = function(){
		tickets += 1;
	};
	window.deleTickets = function(){
		tickets -= 1;
	};
	window.getTickets = function(){
		return tickets;
	};
})();
window.addTickets();
console.log(window.getTickets());
window.addTickets();
console.log(window.getTickets());
window.addTickets();
console.log(window.getTickets());