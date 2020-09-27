// TODO: Write code to define and export the Engineer class.  

//HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 


//"Can set GitHUb account via constructor"
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //subclass 
        super(name, id, email);
        this.github = github;
    }
    //"getRole() should return \"Engineer\"
    getRole() {
        return "Engineer";
    }
    //Can get GitHub username via getGithub()
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer