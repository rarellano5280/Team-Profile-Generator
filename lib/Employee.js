class Employee {
    constructor(gender, name, id, email) {
        this.gender = gender;
        this.name = name;
        this.id = id;
        this.email = email; 
    }

getGender() {
   if(this.gender === 'male') {
    return ('./Team-Profile-Generator/images/male.jpeg')

   } else if (this.gender === 'female') {   

    return('./Team-Profile-Generator/images/female.jpeg')
    
    } else {
        return('./Team-Profile-Generator/images/non-bianary.jpeg')
    }
}

getName() {
    return this.name
}

getId() {
    return this.id
}

getEmail() {
    return this.email
}

getRole() {
return 'Employee'
    }
}

module.exports = Employee;