const { boatinventory } = require("./fishingBoat.js")
let boatItems = boatinventory()
//console.log(boatItems)
/*
This module must import and invoke the function that is exported by the fishing boat module. 
This module should also define and export its own function that generates its own inventory 
that restaurants can use to purchase fish for their daily menus. 
The returned inventory should be an array of objects.

The exported function must be named mongerInventory.

Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the fishing boat. 
If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.
*/
//Define a function for what the fish monger will buy
const fishmonger = () => 
{
    // define a new array to push filtered items to
    const filteredFish = []
    //create a nested loop to iterate off of the price and amount in the boatinventory array
    for (const fish of boatItems)
    // if the quantity is less than 10 then do not buy
    // If price is higher than 7.50 do not buy, 
    if (fish.price < 7.5 && fish.amount > 10) {filteredFish.push(fish)}
    return filteredFish
}

module.exports={fishmonger}

//let fishMongerPurchased = fishmonger()
//console.log(fishMongerPurchased)
/*
The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. For example, 
a chef can tell the monger that she can only spend $5.00 per fish. 
The function should then return only fish that cost $5.00 or less.
Each fish object provided by the fish monger should have a quantity of 10 instead of the original quantity
from the fishing boat.
*/
/*
// define a variable that lets the chef choose the price they want to pay
const chefPrice = 5
// define a funtion that iterrates on the fish the fish monger purchased and pushes that list into a new array
const chefFish = () => 
{
    // define an array to push the chef filtered fish based on price into
    const chefFilteredFish = []
    // nested loop to iterate on price
    for (const fish of fishMongerPurchased)
    // return only those items less than the price that the chef dictated
    if (fish.price < chefPrice){chefFilteredFish.push(fish)}
    return chefFilteredFish
}
let chefPurchased = chefFish()
console.log(chefPurchased)
*/