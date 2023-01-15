// "use strict";

// TODO - write your code here.
//
const randomDamage = () => {
    return(Math.floor((Math.random() * 10) + 1)
}

const chooseOption =(opt1, opt2) => {
    const randNum = Math.floor(Math.random()* 2);
    // let randNum = Math.floor(Math.random() * 1) => {
    return randNum === 0 ? opt1 : opt2;
};
const attackPlayer = function(health) {
    return health= health - randomDamage();
}

const logHealth = (player, health) => {
    return console.log(`${player} health:${health}`);
};
//template string-string interpolation
// don't know how to get a boolean function out of an Arrow function
const logDeath = (winner, loser) => {
    console.log (`${winner} defeated ${loser}`);
};

function isDead(health) {
    return health <= 0 ? true : false;
};

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        const attacker = chooseOption(player1, player2);

        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);

            if (isDead(player2Health)) {
                logDeath(player2, player1);
                break;
            }
            else {
                player1Health = attackPlayer(player1Health);
                logHealth(player1, player1Helath);

                if (isDead(player1Health)) {
                    logDeath(player2, player1);
                    break;
                }
            }
        }
    }

    fight('Auriel', 'Mitch', 100, 100);
    //     Set player2Health equal to the result of attackPlayer with player2Health as its argument.
    // Calls the logHealth function with player2 and player2Health as its arguments.
    // If the result of isDead with player2Health as an argument is true:
    // Call the logDeath function with player1 and player2 as arguments.
    // Break
    // Has an else statement that:
    // Sets player1Health equal to the attackPlayer function with player1Health as its argument.
}
