// create a formatCurrency function and export it
// create a getCoins function and export it

module.exports = { formatCurrency, getCoins } {
    
        if (cents >= 25) {
            remainder = cents % 25
            amtInCoin = cents - remainder
            quarters = amtInCoin / 25
            cents = remainder
        } else if (cents >= 10) {
            remainder = cents % 10
            amtInCoin = cents - remainder
            dimes = amtInCoin / 10
            cents = remainder
        } else if (cents >= 5) {
            remainder = cents % 5
            amtInCoin = cents - remainder
            nickels = amtInCoin / 5
            cents = remainder
        } else if (cents >= 1) {
            remainder = cents % 1
            amtInCoin = cents - remainder
            pennies = amtInCoin / 1
            cents = remainder
        }
    };
