const products = [
    'Dell hardcore laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'lg supernova laptop',
    'HTC low price Phone',
    'purplr color phone with Laptop',
];

// const searching = 'laptop';
const searching = 'YEllow';


// const output = [];
/* for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product);
    console.log(product.indexOf(searching));
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output); */

const output = [];
for (const product of products) {
    console.log(product);
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}
// console.log(output);


// strats with=========

// const output = [];

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);
