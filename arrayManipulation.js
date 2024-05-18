//task 1

function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num :num * 3);
}

//example 
const numbers =[1,2,3,4,5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);
//output: [3,4,9,16,15]

module.exports = {processArray};


//task 2

function formatArrayStrings(strings,numbers) {
    return strings.map((str,index) => {
        const num = numbers[index];
        return num % 2 === 0 ? str.toUpperCase() : str.LowerCase()
    });
}

//example 
const strings = [dog,lion,shark,kangoroo,cat]
const formattedStrings = formatArrayStrings(strings,processedNumbers);
console.log(formattedStrings);
//output: [dog,LION,shark,KANGAROO,cat]
module.exports = {processArray,formatArrayStrings};