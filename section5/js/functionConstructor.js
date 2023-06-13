function Person(title, firstName, lastName) {
  this.title = title;
  this.firstName = firstName;
  this.lastName = lastName;
}

console.log(Person);

let p1 = new Person("Mr.", "Anh", "Nguyen");

console.log(p1);
console.log("Length: ", Person.length);
console.log("Name: ", p1.firstName);
