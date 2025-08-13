"use strict";
var weekDays;
(function (weekDays) {
    weekDays["Monday"] = "Monday";
    weekDays["Tuesday"] = "Tuesday";
    weekDays["Wednesday"] = "Wednesday";
    weekDays["Thursday"] = "Thursday";
    weekDays["Friday"] = "Friday";
    weekDays["Saturday"] = "Saturday";
    weekDays["Sunday"] = "Sunday";
})(weekDays || (weekDays = {}));
for (const day in weekDays) {
    console.log(weekDays[day]);
    //keyof : chi lay rieng cac key
}
//console.log(Object.values(weekDays));
