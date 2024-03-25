const clockElem = document.getElementById("clock");

//clockElem.innerText = "Buxtehude";

// let date = new Date ();
//console.log(date.toLocaleDateString());

//clockElem.innerText = DataTransferItemList();

function updateClock() {
    const date = new Date ();
    clockElem.innerText = date.toLocaleTimeString();
}
setInterval(updateClock, 1000);

const jokeElem = document.getElementById("joke");

fetch("https://api.chucknorris.io/jokes/random?category=dev").then(response => {
return response.json();
}).then(jsonData => {
    jokeElem.innerText = jsonData.value;
});