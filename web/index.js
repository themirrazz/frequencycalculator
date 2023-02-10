function _updstate(m,v) {
    var o = document.getElementById('o');
    var r = FreqCalc[m](v);
    o.innerText=(
        "It happens every "+r.every.seconds+" seconds"
        + "\n" +
        "It happens every "+r.every.minutes+" minutes"
        + "\n" +
        "It happens every "+r.every.hours+" hours"
        + "\n" +
        "It happens every "+r.every.days+" days"
        + "\n" +
        "It happens every "+r.every.weeks+" weeks"
        + "\n" +
        "It happens every "+r.every.months+" months (30 days)"
        + "\n" +
        "It happens every "+r.every.months31+" months (31 days)"
        + "\n" +
        "It happens every "+r.every.months29+" months (29 days)"
        + "\n" +
        "It happens every "+r.every.months28+" months (28 days)"
        + "\n" +
        "It happens every "+r.every.year+" years"
        + "\n" +
        "It happens every "+r.every.leapyear+" leap years"
        + "\n" +
        "It happens "+r.times.seconds+" times a second"
        + "\n" +
        "It happens "+r.times.minutes+" times a minute"
        + "\n" +
        "It happens "+r.times.hours+" times an hour"
        + "\n" +
        "It happens "+r.times.days+" times a day"
        + "\n" +
        "It happens "+r.times.weeks+" times a week"
        + "\n" +
        "It happens "+r.times.months+" times a month (30 days)"
        + "\n" +
        "It happens "+r.times.months31+" times a month (31 days)"
        + "\n" +
        "It happens "+r.times.months29+" times a month (29 days)"
        + "\n" +
        "It happens "+r.times.months28+" times a month (28 days)"
        + "\n" +
        "It happens "+r.times.year+" times a year"
        + "\n" +
        "It happens "+r.times.leapyear+" times a leap year"
    );
}

setTimeout(()=>{_updstate('EveryDays',1)},1000)
