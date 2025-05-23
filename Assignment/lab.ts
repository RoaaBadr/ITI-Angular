/* Task 1 */

function handleArray(arr: (number | string)[]) {
    // Checks if all items are numbers
  if (arr.every(x => typeof x === "number")) {
    return arr.reduce((sum, x) => sum + (x as number), 0);
  }
    // Checks if all items are strings
  if (arr.every(x => typeof x === "string")) {
    return arr.join("");
  }
    // Checks if all items are strings
  return arr
    .filter(x => typeof x === "number")
    .map(x => x as number)
    .sort((a, b) => a - b);
}

console.log(handleArray([1, 2, 3])); 
console.log(handleArray(["a", "b", "c"]));  
console.log(handleArray(["a", 5, "b", 3])); 


/* Task 2 */

// (1): Abstract class
abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// (2): IEmployee Interface
interface IEmployee {
  id: number;
  fname: string;
  lname: string;
  age: number;
  salary: number;
  address:{
    city: string;
    street: string;
    zCode: number;
  }
}

// (3): Implementation
class Employee implements IEmployee {
  constructor(
    public id: number,
    public fname: string,
    public lname: string,
    public age: number,
    public salary: number,
    public address: {
      city: string;
      street: string;
      zCode: number;
    }
  ) {}

  getSalary(): number {
    return this.salary;
  }
}

// (4): Display Data
class Manager extends Employee {
  constructor(
    id: number,
    fname: string,
    lname: string,
    age: number,
    salary: number,
    address: {
      city: string;
      street: string;
      zCode: number;
    },
  ) {
    super(id, fname, lname, age, salary, address);
  }

  showEmployeeData(): void {
    console.log(`${this.fname} ${this.lname}, Age: ${this.age}`);
  }
}

const manager = new Manager(1, "Sara", "Ahmed", 35, 12000, {
  city: "Cairo",
  street: "Main St",
  zCode: 12345
});

manager.showEmployeeData(); // Display Employee Data
console.log("Salary:", manager.getSalary()); // Display Salary

// (5): Enum
enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}
// Check if day is a weekend
function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.Friday || day === WeekDay.Saturday;
}

console.log("Is Friday weekend?", isWeekend(WeekDay.Friday));
console.log("Is Monday weekend?", isWeekend(WeekDay.Monday)); 
