// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//again using exported data from the enployee.js file
const Employee = require("./Employee");

//extends upon the Employee class so that it can take in its common parameters
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email); //common perameters
        this.school = school; //individual perameters of itern
    }

    //fuction override so that it is used again for the intern
    getRole(){
        return "Intern"
    }
    //individul fuction to return the individual perameter for intern which will be the school value that will be inputted later
    getSchool(){
        return this.school
    }
}
module.exports = Intern;