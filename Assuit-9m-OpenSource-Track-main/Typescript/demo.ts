// var fname: string = "ali";

// fname = "mona";

// fname = true;

// var num: number = 20;

/** datatypes
 *
 * number
 * String
 * boolean
 * any
 * undefined
 * null
 * Array
 */

// var fname: boolean = true;

// fname = 1;

// var fname: any;

// fname = "mona";
// fname = 10;
// fname = true;
// fname = [""];

// var fname;

// console.log(fname);
/** union datatype */

// var fname: string | number | boolean = "ali";

// fname = 10;

// fname = true; // Error

// any data
// let arr: string[] = ["mona"];
// let arr2: number[] = [10];
// let arr3: any[] = [10, "mona", true];

// let person: { id: number; fname: string; age: number };

// person = { id: 1, fname: "mona", age: 24 };

// person.fname = 12;

// let products: { id: number; name: string; category: string; price: number }[];

// products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 200,
// 		category: "School",
// 	},
// 	{
// 		id: 2,
// 		name: "PEn",
// 		price: 200,
// 		category: "School",
// 	},
// ];
// 2 params -- must send
// optional
// function sum(x?: number, y: number = 0) {}

// sum();
// sum(); // 1 args
// sum(10);
// sum(10, 20); //
// sum("mona", "ali"); //

// function sum(x: number, y: number): number {
// 	return x + y;
// }

// function sayHello(): void {
// 	console.log("Hello");
// }

// function sum(x: number, y: number): void {
// 	if (x > 10) {
// 		return;
// 	}
// }

// class Person {
// 	fname: string;
// 	age: number;
// 	constructor(fname: string, age: number) {
// 		this.fname = fname;
// 		this.age = age;
// 	}
// }

// blueprint -- getter -- setter -- encapsulation
// class Person {
// 	constructor(public fname: string, private age: number) {}

// 	get getAge() {
// 		return this.age;
// 	}
// 	set setAge(value: number) {
// 		this.age = value;
// 	}
// }

// let p1 = new Person("mona", 12);

// p1.setAge = 12345; // set
// console.log(p1.getAge); // get

// interface IPerson {
// 	id: number;
// 	name: string;
// 	age: number;
// }

// class Person implements IPerson {
// 	constructor(public id: number, public name: string, public age: number) {}

// 	display() {}
// }

// // valid
// class User extends Person {
// 	constructor(id: number, name: string, age: number, public password: string) {
// 		super(id, name, age);
// 	}
// 	override display(): void {}
// }
// let people: IPerson[] = [
// 	{
// 		id: 1,
// 		name: "ali",
// 		age: 12,
// 	},
// ];
// abstract class Person {}
// static -- Es6
// typescript
