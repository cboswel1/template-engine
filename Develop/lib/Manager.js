// TODO: Write code to define and export the Manager class. 

//HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //subclass 
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //'getRole() should return "Manager"
    getRole() {
        return "Manager";
    }
    //Can get office number via getOffice()
    getOffice() {
        return this.officeNumber;
    }
}

module.exports = Manager