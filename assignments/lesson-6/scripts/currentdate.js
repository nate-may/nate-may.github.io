var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


var month = new Array(12);
month[0] = "January";
month[0] = "February";
month[0] = "March";
month[0] = "April";
month[0] = "May";
month[0] = "June";
month[0] = "July";
month[0] = "August";
month[0] = "September";
month[0] = "Octber";
month[0] = "November";
month[0] = "December";




var n = weekday[d.getDay()];
var m = month[d.getmonth()];
document.getElementById("currentdate").innerHTML = n + ", " + d.getDate() + " " + m " " + d.getFullYear();
