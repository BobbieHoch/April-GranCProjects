// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// function countUnitDivisibleBy5(step) {
//   let total = step;
//   while (total % 5 !== 0) {
//     console.log(total);
//     total += step;
//   }
//   console.log(total);
// }
// countUnitDivisibleBy5(4);

//declare function weatherOutside
//parameter: weather(string), temperature(number)
//Functionality: use if statements to tell me what to bring outside. Types of weather are sun, rain, and snow. Sunny tell me "You don't need an umbrella", Rain "You need an umbrella".
//Snow tell me to wear a coat
//Use a separate if statement to give me one of these as well as the above
//Temperature is 40 and below, tell me it is cold and to bring a coat. 41-80,
//tell me to go outside and enjoy the day. above 80 tell  me to stay inside.
function weatherOutside(weather, temperature) {
  if (weather === "Sun") {
    console.log("Wear your shades");
  } else if (weather === "rain") {
    console.log("Bring your umbrella.");
  } else if (weather === "snow") {
    console.log("Wear your coat.");
  } else {
    console.log("That is not an option");
  }
  if (temperature <= 40) {
    console.log("It is cold0outside, you will need a coat.");
  } else if (temperature > 40 && temperature <= 80) {
    console.log("Go outside and enjoy the day.");
  } else {
    console.log("Stay inside it's way too hot.");
  }
}
weatherOutside("rain", 70);

//Declare a variable named students that is initialized to an array with the following objects:
// name assessment grade
// Mitch 3 2
// Jalen 3  3
// Matt 5  10
// Henry 8 7
function findStudentsWhoTookAssessment(arrayOfStudents, assessmentNumber)[
  {name: "Mitch", assessment: 3, grade: 2},
  {name: "Jalan", assessment: 3, grade: 3},
  {name: "Matt", assessment: 5, grade: 10},
  {name: "Henry", assessment: 8, grade: 7},
]
function addStudentGrade( arrayOfStudents,name, assessment, grade)
 functionality 
 array.splice({4,1,})
// / declare function findStudentsWhoTookAssessment
// paramter: arrayOfStudents, assessmentNumber
//functionality: find all of the students who took the number of the assessment passed in. So in my example, if I put in 3 I want to get back BOTH jalen and mitch as objects.
//declare function addStudentGrade
// parameter: arrayOfStudents, name, assessment, grade
//functionality: add student and their related info to the BEGINNING of the array
// declare function whichStudentsPassed
// parameters: arrayOfStudents
//functionality: return an array of every student that got a 7 or above on an assessment