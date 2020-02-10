const inquirer = require('inquirer');

function promptUser() {
    return inquirer.prompt([
        {
            message: 'Sup dog. Waddya say we build your team??'
        },
      {
        type: 'input',
        name: 'name',
        message: "What is your manager's name?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your manager's id?"
      },
      {
        type: 'input',
        name: 'email',
        message: "what is your manager's email?"
      },
      {
        type: 'input',
        name: 'food',
        message: "what is your manager's office number?"
      },
      {
        type: 'list',
        name: 'newTeamMember',
        message: 'Which type of team member do you want to add?',
        choices: ["Engineer", "Intern", "That's all for now folks!"]
      },
    ]);
  }
  
  
  promptUser().then(() => {

    console.log(answers);
  })
;
