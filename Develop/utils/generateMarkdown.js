function renderLicenseBadge(license) {
    if (!license || license === 'None') {
        return '';
    }

    const badges = {
        MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        Apache: '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
        GPL: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        ISC: '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
    };

    return badges[license] || '';
}

function renderLicenseLink(license) {
    if (!license || license === 'None') {
        return '';
    }

    const links = {
        MIT: '[MIT License](https://opensource.org/licenses/MIT)',
        Apache: '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
        GPL: '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)',
        ISC: '[ISC License](https://opensource.org/licenses/ISC)',
    };

    return links[license] || '';
}

function renderLicenseSection(license) {
    if (!license || license === 'None') {
        return '';
    }

    return `
## License
This project is licensed under the ${license} license.  
For more details, refer to ${renderLicenseLink(license)}.
    `;
}

function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about this project, please contact me using the information below:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
