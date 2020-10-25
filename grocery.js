var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.lineItem = name + ", " + quantity + ", " + price ;
    }
    return Grocery;
}());
function groceryList(groceries) {
    return "Name: " + groceries.name + " | " + "Quantity: " + groceries.quantity + " | " + "Price: " + groceries.price ;
}
var almondMilk = new Grocery ("Almond Milk", "1", "$2.49 \n");
var dragonFruit = new Grocery ("Dragon Fruit", "3", "$5.99 \n")
var chickenSausage = new Grocery ("Chicken Sausage", "2", "$3.99 \n")
var redPotatoes = new Grocery ("Red Potatoes", "4", "$3.16 \n")

document.body.textContent = groceryList(almondMilk) + groceryList(dragonFruit) + groceryList(chickenSausage) + groceryList(redPotatoes);