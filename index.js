//packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMd = require("./utils/generateMarkdown");

//questions prompted in terminal when generating README file
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of this project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation behind the project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps for installation for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'List out any sources that should be credited.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using?',
        choices: ['None', 'MIT', 'Apache 2.0', 'ISC', 'BSD 3-Clause', 'BSD 2-Clause'],
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can your project be tested?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Finally, what is your Email address?',
    }
];

//creates the README.md file
function writeFile(file, data) {
    return fs.writeFileSync(path.join(process.cwd(), file), data)
};

//function to be called to generate the README
function generate() {
    fs.mkdir('README', (e) => {
        if (e) throw e;
    });

    inquirer.prompt(questions).then((answers) => {
        console.log('Generating README.md... Please Wait...');
        writeFile('./README/README.md', generateMd({ ...answers }));
    });
};

generate();