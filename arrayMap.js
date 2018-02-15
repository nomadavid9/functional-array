const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]


// raditional map method.

function animalMap(array) {
    let animalMapArray = [];
    for (let i = 0; i < array.length; i++) {
        animalMapArray.push(array[i].name);
    }
    return animalMapArray;
}

let animalNames = animalMap(Animals);
console.log(animalNames);




// 3 lines of code for the same problem.

let animalArray = [];
const animalMapArray2 = Animals.map(arrayCell => animalArray.push(arrayCell.name));

console.log(animalArray);
