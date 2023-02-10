//% block="ItHappens Freq Calc" color="#4795d1" icon="\uf1ec"
namespace FreqCalc {
    //% block="it happens every $x mintues"
    export function EveryMinutes (x) {
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
    }
    //% block="it happens every $x hours"
    export function EveryHours (x) {
        return this.EveryMinutes(x*60)
    }
    //% block="it happens every $x days"
    export function EveryDays (x) {
        return this.EveryMinutes(x*60*24)
    }
    //% block="it happens every $x weeks"
    EveryWeeks: function (x) {
        return this.EveryMinutes(x*60*24*7)
    }
    //% block="it happens every $x months"
    export function EveryMonths(x) {
        return this.EveryMinutes(x*60*24*30)
    }
};
