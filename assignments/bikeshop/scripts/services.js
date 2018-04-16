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