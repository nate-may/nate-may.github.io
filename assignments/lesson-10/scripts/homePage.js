var request = new XMLHttpRequest();
request.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
request.responseText = 'text';
request.send();
request.onload = function () {
    var homePage = JSON.parse(request.responseText);
    /*   document.getElementById('founded-0').innerHTML = homePage.towns[0].yearFounded;*/
    document.getElementById('founded-0').innerHTML = homePage.towns[0].yearFounded;
    document.getElementById('motto-0').innerHTML = homePage.towns[0].motto;
    document.getElementById('population-0').innerHTML = homePage.towns[0].currentPopulation;
    document.getElementById('rainfall-0').innerHTML = homePage.towns[0].averageRainfall;

    document.getElementById('founded-1').innerHTML = homePage.towns[1].yearFounded;
    document.getElementById('motto-1').innerHTML = homePage.towns[1].motto;
    document.getElementById('population-1').innerHTML = homePage.towns[1].currentPopulation;
    document.getElementById('rainfall-1').innerHTML = homePage.towns[1].averageRainfall;

    /* document.getElementById('founded-3').innerHTML = homePage.towns[3].yearFounded;*/
    document.getElementById('founded-3').innerHTML = homePage.towns[3].yearFounded;
    document.getElementById('motto-3').innerHTML = homePage.towns[3].motto;
    document.getElementById('population-3').innerHTML = homePage.towns[3].currentPopulation;
    document.getElementById('rainfall-3').innerHTML = homePage.towns[3].averageRainfall;

}
/*I tried to study the instructions, Maria's code, and Logan's code. I was unable to get things to work independently, and was also unable to format my page to look like Maria's, which in my opinion seemed perfect. Thanks to Prof. Odom ,I was able to study Isaac's code. His is light on the Java and heavier on the HTMl. I can work my head around it. */
