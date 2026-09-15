console.log("this is javascript page 2");
const shoppinglist = [];
shoppinglist.push("soap", "popsicle", "water bottles", "candy", "lemons");
shoppinglist[2] = "can of peas";
shoppinglist.shift(0);
shoppinglist.shift(0);
shoppinglist.reverse();
console.log(shoppinglist);
console.log("the list contains " + shoppinglist.length + " items");
