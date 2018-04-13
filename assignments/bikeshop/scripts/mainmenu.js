// Hamburger menu script

function toggleNavMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// json accordion jQuery

$(document).ready(function(){
    $( function() {
        $( "#accordion" ).accordion();
    } );
});

// Wayfinding element
//Active navigation script

//remember to add an ID of "mainmenu" to the nav ul
var urlString= document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF !=="") {
    var menu = document.querySelectorAll('ul.mainmenu li a');
    var i;
    // loop through all the manu items in the navigation
    for(i=0; i<menu.length; i++) {
        var currentURL=(menu[i].getAttribute("href"));
        menu[i].parentNode.className=""; // turn off highlighted by default
        if (currentURL===pageHREF) {
            menu[i].parentNode.className="active";  //turn on if a match
        }  // end if
    }  // end of the search for a match
}  //end of the if !==


// Current date script

var date = new Date();

var weekDay = new Array(7);
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";

var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var weekday = weekDay[date.getDay()];
var whichmonth = month[date.getMonth()];

document.getElementById("currentdate").innerHTML = weekday + ", " + date.getDate() + " " + whichmonth + " " + date.getFullYear();


// Severity slider script

function sliderInput(custRating) {
    document.getElementById("severityRating").innerHTML = custRating;
}
