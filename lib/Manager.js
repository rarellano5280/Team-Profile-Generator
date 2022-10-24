const Employee = require("./Employee");

const manQuestArr = [
    {
        type: 'list',
        message: 'Please choose your gender',
        name : 'gender',
        choices: ['Male' , 'Female' , 'Non-Bianary']
    },
    {
        type: 'input',
        message: "Please enter the manager's name",
        name: 'name'
    },
    {
        type: 'input',
        message:"Please enter the manager's ID.",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the manager's email",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the manager's office phone number",
        name: 'officeNumber'
    }
]

class Manager extends Employee {
    constructor(gender, name, id, email, officeNumber) {
        super(gender, name, id, email);
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}
module.exports = {Manager, manQuestArr};