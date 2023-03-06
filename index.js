const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { addListener } = require("process");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const ids = [] // create an empty array that the IDs will be added to, this allowws us to make sure there are no duplicate ids
const teamMembers = [] // creates an empty array to store the team members and their roles.

const teamPortal = () => {

    function buildTeam(){
        //if the file name output doesnt exist then it will create a file called output that will have a html file called team.html
        if(!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR)
        }//this makes node use the command line to create and render these files
        fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
    }



    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Who is the intern for this team?",
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter a Name"
                }

            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's ID number",
                validate: answer => {
                    if(ids.includes(answer)){
                        console.log("This ID already exists, please check your Interns details")
                    }
                     else if(!isNaN(answer)){
                        return true
                    }
                    return "Please enter a Valid ID number"
                    
                }

            },
            {
                type: "input",
                name: "internEmail",
                message: "what is the interns's Email address",
                validate: answer => {
                    if(answer.includes('@')){
                        return true
                    }
                    return "Please enter a Valid Email address"
                    
                }

            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school called?",
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter a Github account username"
                }

            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            ids.push(answers.internId);
            console.log("You have added an Intern to your Team!")
            createTeam();
        })
    }






    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Who is the engineer for this team?",
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter a Name"
                }

            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's ID number",
                validate: answer => {
                    if(ids.includes(answer)){
                        console.log("This ID already exists, please check your engineers details")
                    }
                     else if(!isNaN(answer)){
                        return true
                    }
                    return "Please enter a Valid ID number"
                    
                }

            },
            {
                type: "input",
                name: "engineerEmail",
                message: "what is the engineer's Email address",
                validate: answer => {
                    if(answer.includes('@')){
                        return true
                    }
                    return "Please enter a Valid Email address"
                    
                }

            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github account username?",
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter a Github account username"
                }

            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            teamMembers.push(engineer);
            ids.push(answers.engineerId);
            console.log("You have added an Engineer to your Team!")
            createTeam();
        })
    }





    function createTeam(){
        inquirer.prompt([
            {
                type: "list",
                name: "teamMember",
                message: "Which Team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "My Team is complete"
                ]


            },
        ]).then(userChoice => {
            if(userChoice.teamMember === "Engineer"){
                //add engineer
                addEngineer();
            } else if (userChoice.teamMember === "Intern"){
                //add intern
                addIntern()
            }else {
                buildTeam()
            }
    })
}







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
                    if(ids.includes(answer)){
                        console.log("This ID already exists, please check your Interns details")
                    }
                     else if(!isNaN(answer)){
                        return true
                    }
                    return "Please enter a Valid ID number"
                    
                },

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
                message: "What is the manager's office number?",
                validate: answer => {
                    if(!isNaN(answer)){
                        return true
                    }
                    return "Please enter a Valid office number"
                    
                }

            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            ids.push(answers.managerId)
            console.log("you have added a manager to the team! now lets create the rest of the team!")
            createTeam();
        })
    }

    //creates the manager by running the prompt above
    createManager();
}

teamPortal();
//console.log(ids)
//console.log(teamMembers)