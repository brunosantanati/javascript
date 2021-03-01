// https://www.w3schools.com/js/js_objects.asp
// https://www.w3schools.com/js/js_object_constructors.asp

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person);
console.log(person.firstName);
console.log(person["firstName"]);

// constructor functions
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
};

var p = new Person("Bruno", "Sant' Ana", 34, "brown");
console.log(p);
console.log(p.firstName);
console.log(p["firstName"]);