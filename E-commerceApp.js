// USERS
const users = [
    {
        id: 1,
        name: "Aziz",
        email: "aziz@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        name: "Sara",
        email: "sara@gmail.com",
        password: "password"
    }
];

// PRODUCTS
const products = [
    { id: 1, name: "Laptop", price: 7500, stock: 5 },
    { id: 2, name: "Mouse", price: 150, stock: 20 },
    { id: 3, name: "Keyboard", price: 300, stock: 10 },
    { id: 4, name: "Screen", price: 1800, stock: 3 },
    { id: 5, name: "Headphones", price: 450, stock: 0 }
];

// ORDERS
const orders = [
    {
        id: 101,
        userId: 1,
        products: [
            { productId: 1, quantity: 1 },
            { productId: 2, quantity: 2 }
        ],
        status: "delivered"
    },
    {
        id: 102,
        userId: 1,
        products: [
            { productId: 3, quantity: 1 }
        ],
        status: "pending"
    },
    {
        id: 103,
        userId: 2,
        products: [
            { productId: 4, quantity: 2 }
        ],
        status: "processing"
    }
];