// //Area of a Circle pie x r squared
function getAreaOfCircle (radius) {
    return (Math.PI * (radius * radius));
}
// //Circumference of a circle 2 x pie x r
function getCircumferenceOfCircle(radius) {
    return(2*Math.PI*radius)
}
// //Area of a Square side x side
function getAreaOfSquare(side) {
    return(side*side)
}
// //are of a Triangle .5 x b x h
function getAreaOfTriangle(base, height){
    return((base*height)/2)
}


// const getAreaOfCircle = function(radius){
//     return Math.PI * (radius * radius);
// }
// const getCircumferenceOfCircle = function(radius){
//     return 2*Math.PI*radius;
// }
// const getAreaOfSquare = function(side){
//     return side*side;
// }
// const getAreaOfTriangle = function(base,height){
//     return(base*height)
// }

// getAreaOfCircle(12);
// getCircumferenceOfCircle(15);
// getAreOfSquare(22);
// getAreaOfTriangle(9,12);

console.log(getAreaOfCircle(12));
console.log(getCircumferenceOfCircle(15))
console.log(getAreaOfSquare(22))
console.log(getAreaOfTriangle(6,7))