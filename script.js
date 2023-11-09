console.log("script attached");
const URL = "https://pokeapi.co/api/v2/pokemon/"
const nameInput = document.querySelector("#pokeName");
const resultDiv = document.querySelector("#pokeResult")

function getPoke(event){
    event.preventDefault();
    console.log("form submitted");
    resultDiv.innerHTML = "Loading....."
    fetch(URL + nameInput.value)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            resultDiv.innerHTML = `
                <h3> Poke Number: ${data.id} Poke Name: ${data.name} </h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            `
        })
        .catch(err=>console.log(err))
    
}

async function randPoke(){
    resultDiv.innerHTML = "Loading....."
    console.log("clicked random")
    let rand = Math.floor(Math.random()*999)
    let response = await fetch(URL + rand)
    let data = await response.json()
    resultDiv.innerHTML = `
        <h3> Poke Number: ${data.id} Poke Name: ${data.name} </h3>
        <img src="${data.sprites.front_default}" alt="${data.name}">
    `
}
