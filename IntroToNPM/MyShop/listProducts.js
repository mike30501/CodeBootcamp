var faker = require("faker");


console.log("=======================");
console.log("WELCO0ME TO MY SHOP");
console.log("=======================");

for(var i = 0; i < 10; i++){
    console.log(faker.fake("{{commerce.productName}}  -  ${{commerce.price}}"))
}