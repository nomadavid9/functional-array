const Animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" }
]

// function dogFilter(array) {
//     let dogArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].species === "dog") {
//             dogArray.push(array[i].name);
//         }
//     }
//     return dogArray;
// }

// console.log(dogFilter(Animals));

function dogFilter2(array) {
    return array.filter(arrayCell => arrayCell.species === "dog")
        .map(arrayCell => arrayCell.name + " is a " + arrayCell.species)
}
console.log(dogFilter2(Animals))
