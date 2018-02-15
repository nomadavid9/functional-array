const animals = [
    { name: "Peeta", species: "rabbit" },
    { name: "Shadow", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Garfield", species: "cat" },
    { name: "Jimmy", species: "fish" }
]


//Traditional "map" method.

// function animalMap(array) {
//     let animalMapArray = [];
//     for (let i = 0; i < array.length; i++) {
//         animalMapArray.push(array[i].name);
//     }
//     return animalMapArray;
// }

// let animalNames = animalMap(animals);
// console.log(animalNames);




//Takes the array elements, filters out the fish and then maps certain strings depending on the species of the animal.


function animalFilterMap(array) {
    return array.filter(arrayCell => arrayCell.species !== "fish")
        .map(arrayCell =>
            (arrayCell.species === "rabbit") ?
            arrayCell.name + " is a silly " + arrayCell.species :
            (arrayCell.species === "cat") ?
            " and " + arrayCell.name + " is a \ngrumpy " + arrayCell.species + "." :
            " " + arrayCell.name + " is a good boy").toString()

};
console.log(animalFilterMap(animals))
