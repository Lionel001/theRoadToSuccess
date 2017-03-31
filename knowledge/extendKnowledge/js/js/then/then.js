/**
 * Created by chenjunj on 2017/3/2 16:32.
 */
var process = {
    step1: function () {
        console.log(1);
        return;
        // return this;
    },
    step2: function () {
        console.log(2);
        // return this;
    },
    step3: function () {
        console.log(3);
        // return this;
    },
    run: function () {
        return $.when(this.step1());
        /*$.when(this.step1())
            .then(this.step2())
            .then(this.step3())
            .fail(function () {
                console.log('fail');
                $.reject(function () {
                    console.log('reject')
                });
            })
            .always(function () {
                console.log('finished');
            });*/
    }
};
// process.step1().step2().step3();
// $.when(process.step1()).then(process.step2()).then(process.step3());
process.run();