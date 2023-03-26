//DOM manipulators\ Dom REnders
function renderOneAnimal(animal){
    //Build Animal
    let card=document.createElement('li')
    card.className='card'
    card.innerHTML=`
    <img src="${animal.imageURL}">
    <div class="content">
        <h4>${animal.name}</h4>
        <p>$<span class="donations-count">${animal.donation}</span> Donated
        </p>
        <p>${animal.description}</p>
    </div>
    <div class="buttons">
    <button> Donate $10</button>
    <button> Set Fee </button>
    </div>
    `
    console.log(card)
    //add animal to the DOM
    document.querySelector('#animal-list').appendChild(card)
}

//Fetch Requests
//Get fetch for all anim resources
function getAllAnimals(){
    fetch('http://localhost:3000/animalData')
    .then(res=>res.json())
    .then(data=>console.log(data))
}


//initial Render
//Initial Render
//Get Data and render our animals to the DOM
function initialize(){
    // animalData.forEach(animal=>renderOneAnimal(animal))
    getAllAnimals()
}
initialize()