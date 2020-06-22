// To do



// Add colors for past, upcoming, and future items
// Edit each block to change what is written each hour

// Add in current day & time at the top of the page
$("p.date").append(moment().format('MMMM Do, YYYY'));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Create the Grid that houses the calendar
// This got done in HTML

// Edit each block to change what is written each hour

// var colorBlock = function () {
//     if 
// }


// This selects each hour and allows us to change the text 
$(".task").on("click", "article", function() {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<input>")
    .attr("type", "text")
    .val(text);

    $(this).replaceWith(textInput);

    $(this).trigger('blur');

    textInput.trigger("blur");

});

// This deselects the hour and leaves the new text

// This saves the item to local storage

var list = JSON.parse(localStorage.getItem('todolist')) || [];
console.log(list);



