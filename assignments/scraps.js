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
