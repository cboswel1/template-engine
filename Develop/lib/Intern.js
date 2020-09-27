// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee { 
    constructor(name, id, email, school) {
        this.school = school;
    }
    //getRole() should return \"Intern\"
    getRole() {
        return "Intern";
    }
    //Can get school via getSchool()
    getSchool() {
        return this.school;
    }
}