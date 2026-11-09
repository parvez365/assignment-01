// solution - 01
const multiplyValue = (a, b) => {
    if (b === undefined) {
        return a * 2;
    }
    else {
        return a * b;
    }
};
// solution - 02
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        if (value) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
};
// solution - 03
const formatCoordinate = ([latitude, longitude, locationName]) => {
    return `Location: ${locationName}  (${latitude}, ${longitude})`;
};
// solution - 04
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.students >= minStudents && course.isPublished === true);
};
// solution - 06
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
// solution - 07
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
        this.name;
        this._baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`;
    }
}
class Manager extends Employee {
    _department;
    constructor(name, _baseSalary, _department) {
        super(name, _baseSalary);
        this._department = _department;
        this._department;
    }
    getRoleInfo() {
        return `Manager of Engineering: ${this._department}`;
    }
}
// solution - 08
const validateAgeAsync = async (age) => {
    if (age >= 18) {
        return "Access Granted";
    }
    else {
        return "Access Denied: Must be 18 or older";
    }
};
export {};
