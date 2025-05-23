var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// === Part 1: Handle array of numbers or strings ===
function handleArray(arr) {
    var allNumbers = arr.every(function (item) { return typeof item === "number"; });
    var allStrings = arr.every(function (item) { return typeof item === "string"; });
    if (allNumbers) {
        return arr.reduce(function (sum, num) { return sum + num; }, 0);
    }
    if (allStrings) {
        return arr.join("");
    }
    var numbersOnly = arr.filter(function (item) { return typeof item === "number"; });
    return numbersOnly.sort(function (a, b) { return a - b; });
}
// Test examples
console.log(handleArray([1, 2, 3])); // 6
console.log(handleArray(["a", "b", "c"])); // "abc"
console.log(handleArray(["a", 5, "b", 3])); // [3, 5]
// === Part 2: OOP Shape and Employee System ===
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Employee = /** @class */ (function () {
    function Employee(id, fname, lname, age, salary, address) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.salary = salary;
        this.address = address;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.showEmployeeData = function () {
        console.log("".concat(this.fname, " ").concat(this.lname, ", Age: ").concat(this.age, ", Salary: ").concat(this.salary));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, fname, lname, age, salary, address, department) {
        var _this = _super.call(this, id, fname, lname, age, salary, address) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.showEmployeeData = function () {
        _super.prototype.showEmployeeData.call(this);
        console.log("Department: ".concat(this.department));
    };
    return Manager;
}(Employee));
// Test
var manager = new Manager(1, "Sara", "Ahmed", 35, 12000, {
    city: "Cairo",
    street: "Main St",
    zCode: 12345
}, "Sales");
manager.showEmployeeData();
console.log("Salary:", manager.getSalary());
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
function isWeekend(day) {
    return day === WeekDay.Friday || day === WeekDay.Saturday;
}
console.log("Is Friday weekend?", isWeekend(WeekDay.Friday)); // true
console.log("Is Monday weekend?", isWeekend(WeekDay.Monday)); // false
