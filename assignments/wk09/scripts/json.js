var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
var triCities = request.response;
    showData(triCities);
}
function showData(jsonObj) {
    var citiesInfo = jsonObj['towns'];

    for (var i = 0; i < citiesInfo.length; i++) {
        if (i === 2) { continue;}
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = cityInfo[i].name;
        myPara1.textContent = 'City Motto: ' + citiesInfo[i].motto;
        myPara2.textContent = 'City Founded: ' + citiesInfo[i].yearFounded;
        myPara3.textContent = 'Current Population: ' + citiesInfo[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall: ' + citiesInfo[i].averageRainfall;
        myPara5.textContent = 'Current Events: ';

        var citiesEvents = citiesInfo[i].events;
        for (var j = 0; j < citiesEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = citiesEvents[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

