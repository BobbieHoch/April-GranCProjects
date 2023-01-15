// Event Type, and Temperature to suggest what to wear
//Event type: casual, semi-formal, formal
//Suggested Clothing: "something comfy", "a polo", "a suit".
//Based on Temerature : <54 , 54-70, >70 
// Wear : "a coat", "a jacket", "no jacket"

const Temperature = (temp, event) => {
    if (event === "casual") ;
        return "something comfy";
} else if{
       (event === "semi formal");
       return "a polo";
} else {event === "formal");
        return "Suit and ties.";
}
console.log( 48, "semi formal");



("Since it is ${temp} degrees and you are going to a ${event},you should wear ${} and a ${}. )