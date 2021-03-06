var request = New XMLHttpRequest();
request.open('Get', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
request.responseType = 'json';
request.sent();
request.onload = function () {
    var homePage = request.response;
    document.getElementById('founded-0').innerHTML = homePage.towns[0].yearFounded;
    document.getElementById('motto-0').innerHTML = homePage.towns[0].motto;
    document.getElementById('pop-0').innerHTML = homePage.towns[0].currentPopulation;
    document.getElementById('rainfall-0').innerHTML = homePage.towns[0].averageRainfall;

    document.getElementById('founded-1').innerHTML = homePage.towns[1].yearFounded;
    document.getElementById('motto-1').innerHTML = homePage.towns[1].motto;
    document.getElementById('pop-1').innerHTML = homePage.towns[1].currentPopulation;
    document.getElementById('rainfall-1').innerHTML = homePage.towns[1].averageRainfall;

    document.getElementById('founded-2').innerHTML = homePage.towns[2].yearFounded;
    document.getElementById('motto-2').innerHTML = homePage.towns[2].motto;
    document.getElementById('pop-2').innerHTML = homePage.towns[2].currentPopulation;
    document.getElementById('rainfall-2').innerHTML = homePage.towns[2].averageRainfall;

}
/*var header = document.querySelector('header');*/
/*
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townInfo = request.response;
    showData(townInfo);

}
//JSON will go in here, values, statistics, and display on HTML

/*function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}*/

/*function showData(jsonObj) {
    var cities = jsonObj['towns'];

    for (var i = 0; i < cities.length; i++) {
        if (i == 2) continue;

        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = cities[i].name;
        myH3.textContent = 'Motto: ' + cities[i].motto;
        myPara1.textContent = 'Year Founded: ' + cities[i].yearFounded;
        myPara2.textContent = 'Population: ' + cities[i].currentPopulation;
        myPara3.textContent = 'Average Rainfall:' + cities[i].averageRainfall;
        myPara4.textContent = 'Upcoming Events:';

        var cityEvents = cities[i].events;
        for (var j = 0; j < cityEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = cityEvents[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}*/
/*
request.responseType = 'json';
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
    var superHeroesText = request.response; // get the string from the response
    var superHeroes = JSON.parse(superHeroesText); // convert it to an object
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}*/
/*var myJSON = {
    "name": "Chris",
    "age": "38"
};*/
/*myJSON
var myString = JSON.stringify(myJSON);
myString*/
