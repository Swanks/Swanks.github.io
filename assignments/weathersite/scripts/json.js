var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = function() {
var townData = request.response;
    showData(townData);
}
function showData(jsonObj) {
    var data = jsonObj['towns'];

    for (var i = 0; i < data.length; i++) {
        if (i === 2) { continue;}
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myList = document.createElement('ul');

        myH3.textContent = data[i].name;
        myPara1.textContent = 'Motto: ' + data[i].motto;
        myPara2.textContent = 'City Founded:  ' + data[i].yearFounded;
        myPara3.textContent = 'Population: ' + data[i].currentPopulation;
        myPara4.textContent = 'Avg. Rainfall:  ' + data[i].averageRainfall;
        myPara5.textContent = 'Upcoming Events: ';

        var townEvents = data[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            if (j > 2) { continue;}
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

