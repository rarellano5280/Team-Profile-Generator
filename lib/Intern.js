const Employee = require("./Employee");

class Intern extends Employee {
    constructor(gender, name, id, email, school) {
        super(gender, name, id, email);
        this.school = school
    }
    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern