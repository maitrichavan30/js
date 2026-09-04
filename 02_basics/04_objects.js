//const tinderUser = new Object(); //its singleton object
const tinderUser = {} // its object literal syntax or non singleton object

tinderUser.id = "123abc";
tinderUser.name = "maitri";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "maitri@gmail.com",
    fullName: {
        userfullName: {
            firstname: "maitri",
            lastname: "chavan"
        }
    }
}

console.log(regularUser.fullName.userfullName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({},obj1,obj2,obj4) // this will merge all the objects into one object

const obj3 = {...obj1, ...obj2, ...obj4} // this will also merge all the objects into one object
console.log(obj3);

// how values come from database

const users = [
    {
        userId: 1, userName: "maitri"
    },
    {
        userId: 2, userName: "maitri chavan"
    },
    {
        userId: 3, userName: "maitri chavan patel"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this will check if the property is present in the object or not