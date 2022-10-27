const Employee = require("./Employee");

class Manager extends Employee {
    constructor(gender, name, id, email, officeNumber) {
        super(gender, name, id, email);
        this.officeNumber = officeNumber;
        this.gender = gender
    }

    getGender(gender) {
        if(gender === 'Male') {
         return ("./images/male.jpeg");
     
        } else if (gender === 'Female') {   
     
         return ("./images/female.jpeg");
         
         } else {
             return ("./images/non-bianary.jpeg")
         }
     }  

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;