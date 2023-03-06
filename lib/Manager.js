// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

     //fuction override so that it is used again for the Manager. this does not change the fuctions on the other files - it just makes it available to be used within this file as it has been extended on
    getRole(){
        return "Manager"
    }

    //individul fuction to return the individual perameter for manager which will be the office number value that will be inputted later
    getOfficeNumber(){
        return this.officeNumber
    }
}
module.exports = Manager;