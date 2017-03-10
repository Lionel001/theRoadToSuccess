/**
 * Created by chenjunj on 2017/3/2 16:25.
 */
$.ajax({
    url: url,
    type: 'post',
    dataType: 'json',
    data: {'info': info}
}).done((function(data) {
        if(data.status){
            // 这里this指向的是外层bind进来的this
            this._data.process_type = info.process_type;
        }else{
            uUnique.noticeBox.showWarning(data.message);
        }
    }).bind(this));