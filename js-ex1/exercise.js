let myFood = ['pizza', 'pasta', 'risotto'];
let myInfo = ["Souad", 31, "Business analyst", 1989];
let numOfString = 0;
let numOfNumber = 0;
function myFunction (array) {
    numOfNumber = 0;
    numOfString = 0;
    console.log(`The length of the array is ${array.length}`);
    array.forEach(function myFunction2(item) {
        if(typeof item === 'number') {
            numOfNumber++;
        } else {
            numOfString++;
        }
    })
    console.log(`The numbers of the number elements ${numOfNumber}`);
    console.log(`The numbers of the string elements ${numOfString}`);
}
myFunction(myFood);
myFunction(myInfo);
