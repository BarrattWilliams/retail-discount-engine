let products = [
    {
        sku: "P01",
        name: "Laptop",
        category: "electronics",
        price: 1200,
        inventory: 5
    },
    {
        sku: "P02",
        name: "T-Shirt",
        category: "apparel",
        price: 25,
        inventory: 20
    },
    {
        sku: "P03",
        name: "Apples",
        category: "groceries",
        price: 3,
        inventory: 50
    },
    {
        sku: "P04",
        name: "laundry Detergent",
        category: "household",
        price: 15,
        inventory: 12
    },
    {
        sku: "P05",
        name: "Book",
        category: "other",
        price: 18,
        inventory: 8
    }
];
for (const product of products) {
    let discount = 0;

    switch (product.category) {
    case "electronics":
        discount = 0.20;
        break;

case "apparel":
    discount = 0.15;
    break;

    case "groceries":
    case "household":
        discount = 0.10;
        break;

    default:
        discount = 0;
        break;
}
product.promoPrice=product.price * (1-discount)

console.log(product);
}

//customer type discount
let customerType = "student";
let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05;
}
else if (customerType === "senior") {
    extraDiscount === 0.07;
}
else {
    extraDiscount = 0;
}

//checkout simulation

for (let customerNumber = 1; customerNumber <= 3; customerNumber++) {
    let total = 0;

    for (const product of products) {
        if (product.inventory > 0) {
            total = total +product.promoPrice;
            product.inventory = product.inventory - 1;
        }
    }
total = total - (total - extraDiscount);

console.log("Customer" + customerNumber + "total: $" +total.toFixed(2));
}

//single product in loop

let sampleProduct = products[0];

for (let key in sampleProduct) {
    console.log(key + ": " + sampleProduct[key]);
}

//object entries report
for (const product of products) {
    console.log("Product");

    for (const [key, value] of Object.entries(product)) {
        console.log(key + ": " + value);
    }
}
