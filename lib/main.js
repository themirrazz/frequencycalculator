(function () {
var xO = {
    /*
    It happens every x minutes
    */
    EveryMinutes: function (x) {
        return {
            every: {
                seconds: x*60,
                minutes: x,
                hours: x/60,
                days: (x/60)/24,
                weeks: ((x/60)/24)/7,
                months: ((x/60)/24)/30,
                months31: ((x/60)/24)/31,
                months29: ((x/60)/24)/29,
                months28: ((x/60)/24)/28,
                year: ((x/60)/24)/365,
                leapyear: ((x/60)/24)/366,
            },
            times: {
                seconds: (1/60)/x,
                minutes: 1/x,
                hours: 60/x,
                days: (60*24)/x,
                weeks: (60*24*7)/x,
                months: (60*24*30)/x,
                months31: (60*24*31)/x,
                months29: (60*24*29)/x,
                months28: (60*24*28)/x,
                year: (60*24*365)/x,
                leapyear: (60*24*366)/x,
            }
        }
    },
    EveryHours: function (x) {
        return this.EveryMinutes(x*60)
    },
    EveryDays: function (x) {
        return this.EveryMinutes(x*60*24)
    },
    EveryWeeks: function (x) {
        return this.EveryMinutes(x*60*24*7)
    },
    EveryMonths: function (x) {
        return this.EveryMinutes(x*60*24*30)
    }
};
// works in browser or node.JS
if(typeof module == 'undefined') { window.FreqCalc=xO; } else { module.exports=xo; }
})();
