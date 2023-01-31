$(document).ready(function () {

    //Current day at the top of page, displayed in the jumbotron

    var currentDate = moment().format("dddd Do MMMM");
    var displayDate = document.getElementById("currentDay");
    var currentHour = moment().hour();
    console.log(currentHour);
    displayDate.textContent = currentDate;

    //Save user events to local storage

    var saveBtns = document.querySelectorAll("#save");

    //Event Listener for every save button

    function saveNote() {
        console.log($(this))
        var noteVal = $(this).siblings('.description').val();
        var id = $(this).siblings('.description').attr('id');
        
        localStorage.setItem(id, noteVal);
    }

    saveBtns.forEach(function (button) {
        button.addEventListener('click', saveNote);

        var textArea = $(button).siblings('.description');
        var id = textArea.attr('id');
        var hour = id.substring(5);
        console.log(currentHour, hour);
        if (currentHour > hour) {
            textArea.addClass('past');
        } else if (currentHour == hour) {
            textArea.addClass('present');
        } else if (currentHour < hour){
            textArea.addClass('future');
        };
        var storedNote = localStorage.getItem(id);
        textArea.val(storedNote);
    })
});
