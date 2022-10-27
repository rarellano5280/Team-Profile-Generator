const Employee = require("./Employee");

class Intern extends Employee {
    constructor(gender, name, id, email, school) {
        super(gender, name, id, email);
        this.school = school
        this.gender = gender
    }

    getGender(gender) {
        if(gender === 'Male') {
         return ("./images/male.jpeg")
     
        } else if (gender === 'Female') {   
     
         return ("./images/female.jpeg")
         
         } else {
             return ("./images/non-bianary.jpeg")
         }
     }  

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;