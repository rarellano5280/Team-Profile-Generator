const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (gender, name, id, email, github) {
        super (gender, name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer