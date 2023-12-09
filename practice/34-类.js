// class Person {
//   constructor() {
//     return [];
//   }
// }

// const p = new Person();
// console.log(p);

// class Person {
//   static say() {
//     console.log("dd");
//   }
// }

// console.log(Person.say["HomePage"]);

//
class Person {
  constructor() {
    console.log(this.name);

    console.log(this.say);
  }
  say() {}
  name = "xz";
}
const p = new Person();
