/*The test results are in but the machine did a mess. <br> The array one should be the names and the array two should be the scores.

1-Create a function that combines the two arrays together.

2-creates an object with key and value pair like this => name: score.
  The two arrays are mixed, but their order is correct.

3-Use all the strings elements as keys and the number elements as values to create the "score" object.

4-Once you created the score object print it to the console.*/

let Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary'];
let Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20];

for(let i =0; i < Array1.length; i++){
    for(let l = 0; l < Array2.length; l++){
        if((i === 3 && l === 3) || (i === 4 && l === 4)){
            let name = Array2[l]
            Array2[l] = Array1[i]
            Array1[i] = name
        }
    }
}

let testResult = Array1.concat(Array2); 

let students ={
    studentName:[],
    score:[]
}   

testResult.map(item => {
    if(Number.isInteger(item)) {
        students.score.push(item);      
    } else {
        students.studentName.push(item);
}})

for(let i = 0; i < students.score.length; i++){
    console.log(`${students.studentName[i]} : ${students.score[i]} `);
}

  
