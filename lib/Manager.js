const Employee = require("./Employee");

class Manager extends Employee {
    constructor(gender, name, id, email, officeNumber) {
        super(gender, name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;