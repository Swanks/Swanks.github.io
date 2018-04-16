// Services json

var requestURL= 'https://swanks.github.io/assignments/bikeshop/scripts/service.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();


request.onload = function() {
    var serviceData = JSON.parse(request.responseText);
    console.log(serviceData);

    document.getElementById('tuneUp').innerHTML = serviceData.tuneUp;
    document.getElementById('DSTuneUp').innerHTML = serviceData.DSTuneUp;
    document.getElementById('flat').innerHTML = serviceData.flat;
    document.getElementById('bBleed').innerHTML = serviceData.bBleed;
    document.getElementById('wTrue').innerHTML = serviceData.wTrue;
    document.getElementById('bBuild').innerHTML = serviceData.bBuild;
    document.getElementById('wBuild').innerHTML = serviceData.wBuild;
    document.getElementById('lCharge').innerHTML = serviceData.lCharge;
}
