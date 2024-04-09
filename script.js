let fruitObjects = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "brown", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"}
]

function clearCards() {
    let fruitContainer = document.querySelector('#cards');
    while(fruitContainer.firstChild) {
        fruitContainer.removeChild(fruitContainer.firstChild);
    }
}

function addFruitCard(fruit) {

    let newFruitCard = document.createElement('div');
    // newFruitCard.textContent = apple.name;

    let fruitHeading = document.createElement('h3');
    fruitHeading.textContent = fruit.name;
    newFruitCard.appendChild(fruitHeading);
    let fruitColor = document.createElement('p');
    fruitColor.textContent = `Color: ${fruit.color}`;
    fruitColor.style.color = fruit.color;
    newFruitCard.appendChild(fruitColor);

    let fruitContainer = document.querySelector('#cards');
    newFruitCard.classList.add('fruitCard');
    fruitContainer.appendChild(newFruitCard);
}

function runProgram() {
    console.log("Program is running");

    let apple = fruitObjects[0];

    // for(let i =0; i < fruitObjects.length; i++) {
    //     addFruitCard(fruitObjects[i]);
    // }
    for (const fruit of fruitObjects){
        addFruitCard(fruit);
    }
    addFruitCard(apple);
    
    
}

document.addEventListener('DOMContentLoaded', runProgram);