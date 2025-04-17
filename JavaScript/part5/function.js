/*
1.Write a function named 'makeTea' that takes one parameter, 'typeOfTea',and returns a strimg like
'"making green tea" when called with '"green tea"'.
Store the result in a variable named 'teaOrder'
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}` //return end the function 
}
let teaOrder = makeTea("lemon tea")
// console.log(teaOrder)


/*
2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a massage like '"Order confirmed for chai"' 
Call "confirmOrder" from within 'orderTea' and return the result.
*/

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`
    }
    return confirmOrder()
}
let orderConfirmation = orderTea("masala chai")


/*
3. Write an arrow function  named 'calculateTotal' that takes two parameter:'price' and 'quantity'. The 'price' and 'quantity'.
Store the result in a veriable named 'totalCost'.
*/

const calculateTotal = (price,quantity) => {
    return price * quantity
}
// const calculateTotal = (price,quantity) => price * quantity also a method to return 


let totalCost = calculateTotal(499 * 100)

/*
4. Writee a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it withe the argument '"earl grey"'.
Return the result of calling 'makeTea'.
*/
function makeTea(typeOfTea) {
    
}

function processTeaOrder(teaFunction) {
   return teaFunction(`earl grey`)
}
let order = processTeaOrder(makeTea)
// console.log(order)

/*
5. Write a function named 'createTeaMaker' that returns another funcion. The returned function should take one paramenter, 'teaType', and return a massage like '"making green tea"'.
Store the returned function in a variable named 'teaMaker' and call it with '"gree tea"
*/

function createTeaMaker() {
    return function (teaType) {
        return `making ${teaType}`
    }
}


/*to understand all of these function you should check some YouTube videos */