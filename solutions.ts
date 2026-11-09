const multiplyValue = (a: number, b?: number) => {
    if (b === undefined) {
        return a * 2
    } else {
        return a * b
    }
}


type TValue = string | number | boolean;

const processInput = (value: TValue) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase()
    } else if (typeof value === "number") {
        return value * 10
    } else if (typeof value === "boolean") {
        if (value) {
            return "Active"
        } else {
            return "Inactive"
        }
    }
}


type TLatLong = readonly [number, number, string]

const formatCoordinate = ([latitude, longitude, locationName]: TLatLong) => {
    return `Location: ${locationName}  (${latitude}, ${longitude})`;
}


const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.flat()
}


interface ICourse {
    title: string,
    students: number,
    isPublished: boolean
}

const getPopularCourses = (courses: ICourse[], minStudents: number) => {
    return courses.filter(
        (course) => course.students >= minStudents && course.isPublished === true
    );
};


const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
    return items.map((item) => item[key])
}


class Employee {
    constructor(protected name: string, private _baseSalary: number) {
        this.name
        this._baseSalary
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`
    }
}

class Manager extends Employee {
    constructor(name: string, _baseSalary: number, private _department: string) {
        super(name, _baseSalary)
        this._department
    }

    getRoleInfo(): string {
        return `Manager of Engineering: ${this._department}`
    }
}


const validateAgeAsync = async (age: number): Promise<string>  => {
    if (age >= 18) {
        return "Access Granted"
    } else {
       return "Access Denied: Must be 18 or older"
    }
}