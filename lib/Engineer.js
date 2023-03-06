// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//this allows this file to read the employee.js file and the exported class it contains so that it can be used
const Employee = require("./Employee");

//this inherits all the attributes from employee and adds what they both share to engineer
class Engineer extends Employee {

//and creates its own which differs slightly as it has more details
    constructor(name, id, email, github){
        super(name, id, email) //shared
        this.github = github; //individual
    }

    //this function, due to being extended upon, can be overrided - override function
    getRole() {
        return "Engineer"
    }

    getGithub(){
        return this.github;
    }
}