let computer = {cpu: 12}
let lenovo = {
    screen : "HD",
    __proto__ : computer   // it is to give same properties as computer have inside its object
}
let tomHardware = {}

console.log(`lenovo`,lenovo.__proto__)


let genericCar = { tyres: 4}

let tesla = {
    driver : "Ai"
}

Object.setPrototypeOf(tesla, genericCar)
 console.log(`tesla`,Object.setPrototypeOf(tesla)) // we can use setPrototypeOf instead of __proto__