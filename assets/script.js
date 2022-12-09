$(document).ready(function() {

//Current day at the top of page, displayed in the jumbotron

var currentDate = moment().format("dddd Do MMMM");
var displayDate = document.getElementById("currentDay");
var currentHour = moment().format("HH");

displayDate.textContent = currentDate;

//

});