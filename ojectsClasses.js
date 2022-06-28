//creating new object for a person with firstName,LastName & age

let person = {
    firstName:'Chanandler',
    lastName:'Bong',
    age:35,
    likes:['making jokes','can i be any more weird','basketball']
}

//using dot notation access the firstName

console.log(person.firstName)

//using bracket notation access the lastName

console.log(person['lastName'])

//using bracket notation access 2nd like

console.log(person['likes'][1])

//Object Destructuring

let meal = {
    appetizzer:'chips & salsa',
    entree:'chille relleno',
    dessert:'churros',
    drink:'horchata'
}

//using object destructuring, destructure the dessert property off of the meal object

//let dessert = meal.dessert
//let drink = meal.drink
let {dessert, drink} = meal 
console.log(dessert,drink)

console.log(`${dessert} goes well with ${drink}`)

//lets destructure the remaining items in the same declaration

let { appetizer, entree } = meal; 