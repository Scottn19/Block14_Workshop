// make starting arrays
const arr1 = [2, 4, 6, 8, 11, 20, 15, 22]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr3 = [70, 42, 55, 81, 21, 91, 34]
const arr4 = [2, 4, 6, 8, 10, 11, 12] 
//make another array this time of all the odds and put it in the console.log
const odds1 = arr1.filter((num) => num % 2 === 1);
console.log(odds1); // [11, 15]
const odds2 = arr2.filter((num) => num % 2 === 1);
console.log(odds2); // [1, 3, 5, 7, 9]
const odds3 = arr3.filter((num) => num % 2 === 1);
console.log(odds3); // [55, 81, 21, 91]
const odds4 = arr4.filter((num) => num % 2 === 1);
console.log(odds4); // [11]



function wordSorter(Vowelornot)  {

let cCount = 0 ;
let vCount = 0

for (let i = 0; i < Vowelornot.length; i++) 
  if (Vowelornot[i] === "a" || Vowelornot[i] === "e" ||Vowelornot[i] === "i" ||Vowelornot[i] === "o" || Vowelornot[i] === "u" ) {
    vCount ++
  } else {
    cCount ++
  }
  console.log(wordSorter, "has", cCount, " consonants and ", vCount, "vowels.")
}
wordSorter("hello");
wordSorter("ukelele");
wordSorter("awesome");
wordSorter ("onomonopia");
wordSorter("textbook");



const Arr11 = [1, 2, 3]	
const Arr12 = [1, 3, 5, 7, 9, 11]	
const Arr13 = [20, 50, 30, 60, 200]	
const Arr14 = [1, -1, 2, -3, 5, -8, 13]	

    const RevArr11 = Arr11.reverse();
    console.log(RevArr11); //
    const RevArr12 = Arr12.reverse();
    console.log(RevArr12); // 
    const RevArr13 = Arr13.reverse();
    console.log(RevArr13); // 
    const RevArr14 = Arr14.reverse();
    console.log(RevArr14);


function FizzBuzz (number){
    for (let i = 1; i <= number; i++){
    if (i % 3 === 0 && i % 5 === 0) console.log("Fizz Buzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else console.log(i);}
    }
    FizzBuzz(100);