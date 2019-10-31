//Object property shrothand

const name = 'Andrew';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Zapopan'
};

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 200,
    salePrice : undefined,
    rating: 20
}

// const label = product.label;
// const stock = product.laber;

// const {label:productLabel, stock, rating = 5} = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, stock}) => {
   console.log(type, label, stock);
}

transaction('order', product)