const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (gender, name, id, email, github) {
        super (gender, name, id, email);
        this.github = github;
        this.gender = gender;
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
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer