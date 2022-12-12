const { fishmonger } = require ("./fishMonger.js")
let fishMongerPurchased = fishmonger()
//console.log(fishMongerPurchased)


/*
The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. For example, 
a chef can tell the monger that she can only spend $5.00 per fish. 
The function should then return only fish that cost $5.00 or less.
Each fish object provided by the fish monger should have a quantity of 10 instead of the original quantity
from the fishing boat.
*/
// define a variable that lets the chef choose the price they want to pay

// define a funtion that iterrates on the fish the fish monger purchased and pushes that list into a new array

const chefFish = (chefPrice) => 
{
    // define an array to push the chef filtered fish based on price into
    const chefFilteredFish = []
    // nested loop to iterate on price
    for (const fish of fishMongerPurchased)
    // return only those items less than the price that the chef dictated
    if (fish.price < chefPrice){chefFilteredFish.push(fish)}
    return chefFilteredFish
}
let chefPurchased = chefFish(5)
//console.log(chefPurchased)
//chefFish(5)
/*
This module must import and invoke the function that is exported by the fish monger module. This module should also define a function that build an HTML version of their daily menu. The function should return the generated HTML string. The function must be named fishMenu.

Each day, the chef visits the monger and specifies the maximum price she is able to spend per fish. - DONE
If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory. - TO DO
The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be on the menu.
Tuna Soup
Tuna Sandwich
Grilled Tuna
Your HTML structure must match the example below. Use the same elements and the same class names.
<h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article>
*/

//define a function to add the purchased fish to the menu
const fishMenu = () => 
{
    console.log("<h1>Menu</h1>")
    console.log('<article class="menu">')
    for (const fish of chefPurchased)
    console.log (`<h2>${fish.species}</h2>
    </h2><section class="menu_item>${fish.species} Soup</section>"
    </h2><section class="menu_item>${fish.species} Sandwich</section>"
    </h2><section class="menu_item>Grilled ${fish.species}</section>"`)
    console.log("</article")
}
let menu = fishMenu()
console.log(menu)