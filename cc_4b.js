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
        sku: "P03"
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

console.log(products)

}
