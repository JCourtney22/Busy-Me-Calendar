# Busy-Me-Calendar


##Challenges

My first challenge was identifying how to place a text box into my HTML. I chose this route to help me recap my HTML and CSS knowledge and to further my understanding of how to work Javascript alongside them. I conducted research and came across this website: https://blog.hubspot.com/website/html-text-box I found that I could use a variety of tags to input a text box. I settled on using the <textarea> tag as I wanted the user to be able to input a range of text as opposed to just a single line. I then worked on implementing the CSS and styling before replicating the container to produce a calendar.

I really struggled with the logic surrounding the local storage. I used a tutor session to help me navigate through the local storage code and how to target every textbox, which meant I needed to understand how I could use 'this' to refer to all of the siblings of the description class. This meant that I learnt that I could target all the text areas and buttons instead of writing code for each box, which is what I was initially going to do. This meant that when setting the local storage, I could make the code create the key as the id of the text box (i.e hour-9 or hour-17) and then add the value of the text box accordingly. This meant all the text boxes could be stored when the button was pressed. After this, I was able to navigate through the code to create code that then grabbed any stored data and place it into the correct place by using a for loop and if statement.

##Things I learned

I learnt how the this keyword could be useful to navigate through a specfic area so that the data could then be stored with the correct id.

I also learnt that the key value pair can be set as the variables that relate to the relevant key name (this is where the this keyword was useful) and the value inputed (again, where this keyword was useful). 

##Screenshot


##License Please refer to the LICENSE in the repo.