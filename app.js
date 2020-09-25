const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const engList = [];
const internList = [];
const fs = require('fs');
let manager;

const getEngineerInfo = () => {
    return inquirer.prompt([{
          name: 'engName',
          message: 'What is the employee\'s name?'
    },
    {
          type: 'number',
          name: 'engId',
          message: 'What\'s the engineer\'s employee id?'
    },
    {
          name: 'engEmail',
          message: 'What is the engineer\'s email id?'
    },
    {
          name: 'engGithub',
          message: 'What is the engineer\'s github userrame?'
    }
]).then(answers => {
    const engineer =  new Engineer(answers.engName,answers.engId,answers.engEmail,answers.engGithub);
    engList.push(engineer);
    console.log(engList);
    confirmGetInfo();
})
}

const getInternInfo = () => {
    return inquirer.prompt([{
         name: 'internName',
         message: 'What is the intern\'s name'
    },
    {
        type: 'number',
        name: 'internId',
        message: 'What is the intern\'s id' 
    },
    {
        name: 'internEmail',
        message: 'what is the intern\'s email id?'
    },
    {
        name: 'internSchool',
        message: 'What is the name of the intern\'s school?'
     }
]).then(answers => {
    const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool);
    internList.push(intern);
    console.log(internList);
    confirmGetInfo();
})
}

const confirmGetInfo = () => {
    //console.log(manager);
    return inquirer.prompt({
        type: 'list',
        name: 'empRole',
        choices: ['Engineer','Intern','Done building team'],
        message: 'Please select employee role or select done building the team'
    }).then(answers => {
        
        if (answers.empRole === 'Done building team'){
              console.log(manager);
              console.log(engList);
              console.log(internList);
              const templateData = {
                  'manager' : manager,
                  'engineer' : engList,
                  'intern': internList
              };
              let data = generatePage(templateData);
              console.log(data);
              fs.writeFile('index.html',data,err => {
                  if(err) throw err;
                  console.log('check html file');
              })
        }
        else if(answers.empRole === 'Engineer'){
            getEngineerInfo();
            
        }
        else{
            getInternInfo();
           
        }
    })
}

const promptUser = () => {
    return inquirer.prompt([{
        name: 'mgrName',
        message: 'What is the team manager\'s name?'
    },
    {
        type: 'number',
        name: 'empId',
        message: ' What\'s the manager\'s employee id?'
    },
    {
        name: 'email',
        message: 'What\'s the manager\'s email id?'
    },
    {
        type: 'number',
        name: 'mgrOffNumber',
        message: 'What\'s the manager\'s office number?'
    }]).then(answers => {
        manager = new Manager(answers.mgrName,answers.empId,answers.email,answers.mgrOffNumber);
        console.log(manager);
       // confirmGetInfo().then(templateData => {
        //    return templateData;
       // }); 
        return manager;
    })
}


promptUser().then(data => {
     confirmGetInfo().then(templateData => {
      
     });
     
})