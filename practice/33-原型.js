// // class Person{
// //     constructor(name){
// //         this.name = name
// //     }
// //     sayName=()=>{
// //         console.log(this.name)
// //     }
// // }
// // const person = new Person('111')
// // const person2 = new Person('222')
// // person.sayName()
// // person2.sayName()
// // console.log(person.sayName === person2.sayName,Person.sayName)

// const obj = {a:1,[Symbol()]:'sy'}
// obj.__proto__.fhg = '344'
// Object.defineProperty(obj,'name',{
//     enumerable:false,
//     configurable:true,
//     value:'xz',
//     writable:true
// })
// for(const i in obj){
//     console.log(i) 
// }
// console.log(Object.keys(obj))
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj))



// const obj = {}
// Object.prototype.pro = {}
// const a = {}
// obj.pro.name = 'hell'
// console.log(obj.pro)
// console.log(Object.getOwnPropertyNames(Object.prototype))

// function Person() {

// }
// const person = new Person()
// console.log( person.prototype )

// class Person {
//     name() {
//         return 'xz'
//     }
// }
// const person = new Person()
// Object.setPrototypeOf(Person,{
//     name(){
//         return 'vrjhbhfbvbh'
//     }
// })
// const obj = {}
// Object.defineProperty(obj, 'name', {
//     configurable:true,
//     writable: true,
//     value: 'frerf'
// })
// console.log(Object.getOwnPropertyDescriptors(obj))

// const obj = {
//     name: '1',
//     age: 'age',
//     [Symbol()]: 'sy'
// }
// obj.__proto__.other = 'yy'
// Object.defineProperty(obj, 'ko',{
//     enumerable: true,
//     value: 'okkok'
// })
// console.log(Object.getOwnPropertyNames(obj))
function Person(){

}
Person.prototype = {
    name: 'xz'
}

const person = new Person()
console.log(Person === Person.prototype.constructor)


