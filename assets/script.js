$(document).ready(function () {

    //Current day at the top of page, displayed in the jumbotron

    var currentDate = moment().format("dddd Do MMMM");
    var displayDate = document.getElementById("currentDay");
    var currentHour = moment().format("HH");
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
    })

//Function to go through each of the text boxes, store their notes and then display their notes

    function displayNotes() {
        for (let index = 9; index <= 17; index++) {
            var storedNote = localStorage.getItem(`hour-${index}`);

            if (storedNote) {
                $(`#hour-${index}`).val(storedNote);
            };
        }
        //If statement to compare current time with timeblock and display css
        var id = $(this).siblings('.description').attr('id');
        if ( id < currentHour) {
            id.addClass('past');
        }
    }

    displayNotes();
});
