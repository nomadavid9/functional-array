const animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]


//Traditional map method.

// function animalMap(array) {
//     let animalMapArray = [];
//     for (let i = 0; i < array.length; i++) {
//         animalMapArray.push(array[i].name);
//     }
//     return animalMapArray;
// }

// let animalNames = animalMap(animals);
// console.log(animalNames);




//


function animalFilterMap(array) {
    return array.filter(arrayCell => arrayCell.species !== "cat")
        .map(arrayCell => arrayCell.name + " is a " + arrayCell.species)

};
console.log(animalFilterMap(animals))
