$(document).ready(function () {

    //Current day at the top of page, displayed in the jumbotron

    var currentDate = moment().format("dddd Do MMMM");
    var displayDate = document.getElementById("currentDay");
    var currentHour = moment().hour();
    console.log(currentHour);
    displayDate.textContent = currentDate;

    //Save user events to local storage

    var saveBtns = document.querySelectorAll("#save");

    function saveNote() {
        console.log($(this))
        var noteVal = $(this).siblings('.description').val();
        var id = $(this).siblings('.description').attr('id');

        localStorage.setItem(id, noteVal);
    }
    //Event Listener for every save button
    saveBtns.forEach(function (button) {
        button.addEventListener('click', saveNote);
        //Idenitfying the ID of text areas and then idenitfying the 5th character
        var textArea = $(button).siblings('.description');
        var id = textArea.attr('id');
        var hour = id.substring(5);
        // console.log(currentHour, hour);
        //Comparing the current hour with the id of the text box
        if (currentHour > hour) {
            textArea.addClass('past');
        } else if (currentHour == hour) {
            textArea.addClass('present');
        } else if (currentHour < hour) {
            textArea.addClass('future');
        };
        //Displays stored notes
        var storedNote = localStorage.getItem(id);
        textArea.val(storedNote);
    })
});
