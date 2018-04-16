var requestURL= 'https://swanks.github.io/assignments/bikeshop/scripts/service2.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();


request.onload = function() {
    var serviceData = JSON.parse(request.responseText);
    console.log(price);

    document.getElementById('service1').innerHTML = serviceData.serviceType[0].name;
    document.getElementById('service2').innerHTML = serviceData.serviceType[1].name;
    document.getElementById('service3').innerHTML = serviceData.serviceType[2].name;
    document.getElementById('service4').innerHTML = serviceData.serviceType[3].name;
    document.getElementById('service5').innerHTML = serviceData.serviceType[4].name;
    document.getElementById('service6').innerHTML = serviceData.serviceType[5].name;
    document.getElementById('service7').innerHTML = serviceData.serviceType[6].name;
    document.getElementById('service8').innerHTML = serviceData.serviceType[7].name;
    document.getElementById('service9').innerHTML = serviceData.serviceType[8].name;
    document.getElementById('service10').innerHTML = serviceData.serviceType[9].name;

    document.getElementById('price1').innerHTML = serviceData.serviceType[0].price;
    document.getElementById('price2').innerHTML = serviceData.serviceType[1].price;
    document.getElementById('price3').innerHTML = serviceData.serviceType[2].price;
    document.getElementById('price4').innerHTML = serviceData.serviceType[3].price;
    document.getElementById('price5').innerHTML = serviceData.serviceType[4].price;
    document.getElementById('price6').innerHTML = serviceData.serviceType[5].price;
    document.getElementById('price7').innerHTML = serviceData.serviceType[6].price;
    document.getElementById('price8').innerHTML = serviceData.serviceType[7].price;
    document.getElementById('price9').innerHTML =serviceData.serviceType[8].price;
    document.getElementById('price10').innerHTML = serviceData.serviceType[9].price;
}
