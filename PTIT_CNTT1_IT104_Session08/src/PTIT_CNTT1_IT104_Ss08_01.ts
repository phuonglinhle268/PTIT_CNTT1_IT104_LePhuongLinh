enum weekDays{
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday", 
}
for(const day in weekDays){
    console.log(weekDays[day as keyof typeof weekDays]);
    //keyof : chi lay rieng cac key
}

//console.log(Object.values(weekDays));