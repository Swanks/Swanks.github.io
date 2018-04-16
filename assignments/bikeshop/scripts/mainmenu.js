// Hamburger menu script

function toggleNavMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

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

// jSon accordion in Sales menu
/* Not working, trying Java for now.

    $(document).ready(function(){
        $( function() {
            $( "#accordion" ).accordion();
        } );
    });
*/

/*  Java version - This is working, but not all the way. */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



 //  Slider in sales menu

 $(".slider > div:gt(0)").hide();

 setInterval(function() {
   $('.slider > div:first-child')
     .fadeOut()
     .next()
     .fadeIn()
     .end()
     .appendTo('.slider');
 }, 3000);


// Services json

var requestURL= 'https://swanks.github.io/assignments/bikeshop/scripts/service2.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();


request.onload = function() {
    var price = JSON.parse(request.responseText);
    console.log(price);

    document.getElementById('service1').innerHTML = price.services[0].service;
    document.getElementById('service2').innerHTML = price.services[1].service;
    document.getElementById('service3').innerHTML = price.services[2].service;
    document.getElementById('service4').innerHTML = price.services[3].service;
    document.getElementById('service5').innerHTML = price.services[4].service;
    document.getElementById('service6').innerHTML = price.services[5].service;
    document.getElementById('service7').innerHTML = price.services[6].service;
    document.getElementById('service8').innerHTML = price.services[7].service;
    document.getElementById('service9').innerHTML = price.services[8].service;
    document.getElementById('service10').innerHTML = price.services[9].service;

    document.getElementById('price1').innerHTML = price.services[0].price;
    document.getElementById('price2').innerHTML = price.services[1].price;
    document.getElementById('price3').innerHTML = price.services[2].price;
    document.getElementById('price4').innerHTML = price.services[3].price;
    document.getElementById('price5').innerHTML = price.services[4].price;
    document.getElementById('price6').innerHTML = price.services[5].price;
    document.getElementById('price7').innerHTML = price.services[6].price;
    document.getElementById('price8').innerHTML = price.services[7].price;
    document.getElementById('price9').innerHTML = price.services[8].price;
    document.getElementById('price10').innerHTML = price.services[9].price;
}

