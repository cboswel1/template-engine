// TODO: Write code to define and export the Employee class


//Can instantiate Employee instance

class Employee {
    constructor(name, id, email) {
    //"Can set name via constructor arguments"
    this.name = name; 
    //"Can set id via constructor argument" 
    this.id = id;
    //"Can set email via constructor argument"
    this.email = email; 
    }
    //Can get name via getName()
    getName() {
        return this.name; 
        console.log(this.name);
    }
    //Can get id via getId()
    getId() {
        return this.id;
    }
    //Can get email via getEmail()
    getEmail() {
        return this.email; 
    }
    //getRole() should return \"Employee\
    getRole() {
        return "Employee"
    }
}

module.exports = Employee