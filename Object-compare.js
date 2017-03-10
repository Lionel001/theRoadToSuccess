/**
 * Created by Administrator on 2016/7/22.
 */
var a = {name:'Lionel',age:24};
var b = {name:'Lionel',age:24,a:'asdf'};
for(var property in a){
	if(!b.hasOwnProperty(property)){
		alert(false);
		break;
	}else{
		if(a[property] !== b[property]){
			alert(false);
			break;
		}
	}
}
for(var property in b){
	if(!a.hasOwnProperty(property)){
		alert(false);
		break;
	}else{
		if(a[property] !== b[property]){
			alert(false);
			break;
		}
	}
}
