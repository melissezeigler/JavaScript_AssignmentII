//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }
}

function faveyFoody(){

    console.log(`These are my favorite foods:`)
    for(let i=0; i < Object.keys(person3).length-1; i++){
        console.log(`${Object.keys(person3)[i]} : ${Object.values(person3)[i]}`)
    }
    
    // for(let j=0; j < Object.keys(person3.shakes); j++){
    //     console.log(`Shakes: ${Object.keys(person3.shakes)[j]} : ${Object.values(person3.shakes)[j]}`)
    // }
    // Javascript can't handle dictionaries inside of dictionaries
    console.log("Shakes:")
    console.log(person3.shakes)
}

faveyFoody()

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Hello, ${this.name}!! Your age is ${this.age}`);
    };

    this.addAge = (age) => {
        this.age++
    }

}

let person1 = new Person("Steve", 38);
let person2 = new Person("Lothar", 45);

person1.printInfo();
person2.printInfo();
person1.addAge();
person1.addAge();
person1.addAge();
person1.printInfo();
person2.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const determine_string = (string) => {
    return new Promise ( (resolve, reject) => {
        if(string.length >= 10){
            resolve()
        } else {
            reject()
        }
    })
} 

determine_string('Ottbvcjhgo')

.then( (result) => {
    console.log(`Big Word`)
})
.catch( (error) => {
    console.log(`Small Number`)
})



// TWO CODEWARS PROBLEM
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// array_diff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a,b){
    let i = 0;
    while(i < a.length){
        let j = 0;
        while(j < b.length){
            if(a[i] == b[j]){
                a.splice(i, 1);
                i = 0
                j = 0
            }else{
            j++;
            }
        }
        i++;
    }
    return a
}

console.log(array_diff([777], [1,777,3,5,7,9]))
console.log(array_diff([10, 12, -11, 10, -13, 17, -11, -4, 15, 6, -5, -1], [-11, -8, 2, 11, 12, 15, 10, -15, 17, 1, 20, 15, -14, 7]))

// CODEWARS 2
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function find_short(s){
    let numList = s.split(" ");
    let stringCount = numList[0].length;
    for(let i = 0; i < stringCount; i++){
        if(numList[i].length < stringCount){
            stringCount = numList[i].length
        }
    }
    return stringCount
}

console.log(find_short("bitcoin take over the world maybe who knows perhaps"))