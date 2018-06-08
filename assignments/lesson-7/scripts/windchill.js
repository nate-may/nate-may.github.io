//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16

//var f = windChill;


var s = 5;
var h = 90;
var l = 66;
var a = (h + l) / 2;
windChill = 35.74 + .6215 * a - 35.75 * Math.pow(s, 0.16) + 0.4275 * a * Math.pow(s, 0.16);


document.getElementById("windChill").innerHTML = Math.round(windChill);
//document.getElementById("currentdate").innerHTML = n + ", " + d.getDate() + " " + m + " " + d.getFullYear();
