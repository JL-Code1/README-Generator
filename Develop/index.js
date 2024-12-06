// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (input) => input ? true : 'Project title cannot be empty.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
        validate: (input) => input ? true : 'Description cannot be empty.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the application used?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (input) => input ? true : 'GitHub username cannot be empty.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (input) => input ? true : 'Email cannot be empty.',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`README.md has been generated at ${filePath}`);
        }
    });
}

// Create a function to initialize app
function init() {
    console.log('Welcome to the README Generator!');
    inquirer.prompt(questions)
        .then((data) => {
            console.log('Generating README...');
            const markdown = generateMarkdown(data);
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.error('Error during prompts:', error);
        });
}

// Function call to initialize app
init();
