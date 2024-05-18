// task 3

function createUserProfiles(names, modifiedNames) {
    return names.map((name,index) =>({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

//example
const names = ["Kathy,Charmaine,Abena,Elsie,Karen"]
const profiles = createUserProfiles(names,formattedStrings);
console.log(profiles);

/* output:
[
    { originalName: "Kathy", modifiedName: "dog", id: 1},
    { originalName: "Charamine", modifiedName: "LION", id: 2},
    { originalName: "Abena", modifiedName: "shark", id: 3},
    { originalName: "Elsie", modifiedName: "KANGAROO", id: 4},
    { originalName: "Karen", modifiedName: "cat", id: 5},
]
*/

module.exports = {createUserProfiles};