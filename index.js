const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const ids = [] // create an empty array that the IDs will be added to, this allowws us to make sure there are no duplicate ids
const teamMembers = [] // creates an empty array to store the team members and their roles.

const teamPortal = () => {
    function createManager(){
        console.log("Assemble your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Who is the manager for this team?",
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter a Name"
                }

            },
            {
                type: "input",
                name: "managerId",
                message: "What is the Manager's ID number",
                validate: answer => {
                    if(!isNaN(answer)){
                        return true
                    }
                    return "Please enter a Valid ID number"
                    
                }

            },
            {
                type: "input",
                name: "managerEmail",
                message: "what is the Manager's Email address",
                validate: answer => {
                    if(answer.includes('@')){
                        return true
                    }
                    return "Please enter a Valid Email address"
                    
                }

            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Who is the manager's office number?",
                validate: answer => {
                    if(!isNaN(answer)){
                        return true
                    }
                    return "Please enter a Valid office number"
                    
                }

            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            ids.push(answers.managerID)
            console.log("you have added a manager to the team!")
        })
    }

    //creates the manager by running the prompt above
    createManager();
}

teamPortal();