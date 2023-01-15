export interface Panels{
    name: string;
    price: number;
}

interface Panels {
    name: string;
    price: number;
}

const solarPanels: Panels[] = [
    { name: "silfab", price: 245 },
    { name: "axitech", price: 225 },
    { name: "mission", price: 270 },
];

function calcAverageProductPrice(array: Panels[]):number {
    //empty array in test requires a way to test for it, an empty array is still an array
    let sumOfPrices: number = 0;
    if (!array.length) return 0;
  array.forEach((panels) => (total += panels.price)
    // for (let panels of array) {
    //     sumOfPrices += panels.price;
    }
    return sumOfPrices / array.length;
}
const averagePrice = calcAverageProductPrice(solarPanels);
console.log(averagePrice);
