// import { ProductData } from '../Constants/ProductImage'


var id = Date.now().toString(16)
    .slice(2)
const unique = []
for (let i = 0; i < 100; ++i) {
    unique.push(Math.random().toString(16).slice(2))
    console.log(Date.now().toString(16))
}


console.log(new Set(unique))