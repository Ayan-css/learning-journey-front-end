/*
1. Declare an array named 'teaFlavours' that contains the strings '"green tea"','"black tea"',and '"oolong tea"'
    Access the first element of the array and store it in a variable named 'firsTea'.
*/


// let teaFl  = new Array ("green tea", "black tea","oolong tea")

let teaFlavours = ["green tea", "black tea","oolong tea"]
let firstTea = teaFlavours[0]


/*
2. Declare an array named 'cities' containing '"London","Tokyo", "Paris", and "New York".

Access the third element in the array and store it in variable named 'favoritecity'
*/

let cities = ["London","Tokyo", "Paris","New York"]

let favoritecity = cities[2]

/*
    3. You have an array named teaTypes` containing "herbal tea", "white tea", and "masala chai"
        Change the second element of the array to `"jasmine tea". 
*/

let teaTypes = ["herbel tea","white tea", "masala tea"]
teaTypes[1] = "jasmine tea"


/*
4. Declare an array named citiesVisited containing `"Mumbai" and "Sydney".
Add "Berlin" to the array using the push method.
*/

let citiesVisited = ["mumbai" , "Sydney"]
// citiesVisited[2] = "berlin"
// citiesVisited.push("berlin")
citiesVisited.push("berlin")


/*
5. You have an array named tea0rders` with "chai", `"iced tea", "matcha", and `"earl grey".
Remove the last element of the array using the 'pop` method and store it in a variable named 'lastOrder`.
*/


let tea0rders = ["chai", "iced tea", "matcha", "earl grey"]
let lastOrder = tea0rders.pop()

/*
6. You have an array named 'popularTeas' containing '"Green tea", "oolong tea" , "chai",
create a soft copy of this array named '"softcopyTeas"
*/

let popularTeas = ["Green tea", "oolong tea" , "chai"]

/* let var1 = 5
 let var2 = var1
 var1 = 9              //Uncomment to see what happens
 console.log(var2)      
 console.log(var1)*/
let softcopyTeas = popularTeas
console.log(softcopyTeas)
// popularTeas.pop()
console.log(popularTeas)


/*
7. You have an array named 'topCities' containing ' "Berlin", "Singapore", "New York"
    create a hard copy of this array named 'hardCopyCities'
*/

let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities]                 // it does not get effected if we chage topCities       //let hardCopyCities = topCities.slice()


/*
8. You have two arrays; 'eutopeanCities' containing '"paris" , "Rome", and 'AsianCities' containing '"tokyo" , "Bangkok"
    Merge these two arrays into a new array named 'worldCities'
*/

let eutopeanCities = ["paris" , "Rome"]
let AsianCities = ["tokyo" , "Bangkok"]

let worldCities = eutopeanCities.concat(AsianCities)        // Best method to merge array

/*
9. You have an array named 'teaMenu' containing ' "masala chai" , "oolong tea", "green tea", "ealr tea"
    find the length of the array and store it in a variable named 'menuLegth'.
*/

let teaMenu = ["masala chai" , "oolong tea", "green tea", "ealr tea"]

let menuLegth = teaMenu.length

/*
10. You have an array named 'cityBucketlist' containig '"kyoto" , "london", "Cape town", "vancouver"
    check if "london" is in the array and store the result in a variable named 'isLondonInList'.
*/

let cityBucketlist = ["kyoto" , "london", "Cape town", "vancouver"]
let isLondonInList = cityBucketlist.includes("london")