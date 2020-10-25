class Grocery{
    lineItem: string;
    constructor(public name: string, public quantity: string, public price: string) {
        this.lineItem = name + ", " + quantity + ", " + price;
    }
}

interface listItem{
    name: string;
    quantity: string;
    price: string;
}

function groceryList(groceries: listItem) {
    return "Name: " + groceries.name + " | " + "Quantity: " + groceries.quantity + " | " + "Price: " + groceries.price;
}

let almondMilk = new Grocery ("Almond Milk", "1", "$2.49")
let dragonFruit = new Grocery ("Dragon Fruit", "3", "$5.99")
let chickenSausage = new Grocery ("Chicken Sausage", "2", "$3.99")
let redPotatoes = new Grocery ("Red Potatoes", "4", "$3.16")

document.body.textContent = groceryList(almondMilk) + groceryList(dragonFruit) + groceryList(chickenSausage) + groceryList(redPotatoes)