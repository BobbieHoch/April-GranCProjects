// Task: Create an array of objects representing student submissions. Define a variety of functions for working with such an array. Also call each of the functions at least once to test it.

// Build Specifications:

// 1. Declare a variable named submissions that is initialized to an array with the following objects:

const submissions = [
    {name: 'Jane', score: 95, date:'2020-01-24', passed: true},
    {name: 'Joe', score: 77, date:'2018-05-14', passed: true},
    {name: 'Jack', score: 59, date:'2019-07-05', passed: true},
    {name: 'Jane', score: 88, date: '2020-04-22', passed: true},
];


// 2. Declare a function named addSubmission
// Parameter(s): array, newName, newScore, newDate
// Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.
const addSubmission =(array, newName, newScore, newDate) => {
   submissions.push({
        newName:'Phil',
        newScore: 91,
        newDate:'2017-06-06',
        passed: true,})
   if(newScore >= 60 ? true : false);
   console.log(addSubmission);
}

// 3. Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
// Functionality: remove the object from the array at the specified index using the splice method.
function deleteSubmissonByIndex(array, index);
    submissions.splice(2,1,93);
    submissions.splice(3,1,2021-04-04);
    submissions.splice(4,1,true);
    console.log()

// 4. Declare a function named deleteSubmissionByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.
function deleteSubmissionByName(array, name);


// 5. Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.
function editSubmission (array, index, score) {

}
if 
// 6 Declare a function named findSubmissionByName
// Parameter(s): array, name
// Functionality: return the object in the array that has the provided name. Use the find method.
function findSubmissionByName (array, name) {
    return array.find((element) => element.name === name);
}
const foundName = findSubmissionByName(submisssions, 'Jack');
console.log(foundName);


// 7 Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.
function findLowestScore (array) {
    let lowestScoreObject= array[0];
    
    array.forEach((element) => {
        if(element.score < lowestScoreObject.score){
            lowestScoreObject = element;
        }

    });
    return lowestScoreObject;
}

const lowestScore = findLowestScore(submissions);
console.log(lowestScore);

//8 Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.
function findAverageScore(submissions){
    let total=0;
    for (let element of array) {
        total += element.score;
    }
    return total / array.length;
}

const average = findAverageScore(submissions);
console.log(average);

//9 Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores. 
function filterPassing(array) {
    return submissions.filter((element)=> element.score >= 60);

}
const passingScores = filterPassing(submissions);
console.log(passingScores);

// 10.Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.
function filter90AndAbove(array){
    return array.filter((element) => element.score >= 90);
}

const nintyAndAbove = filter90AndAbove(submissions);
console.log(nintyAndAbove);
