//function to add certain license badge depending on selection
function licenseBadge(license) {
    return license == 'MIT' ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    : license == 'Apache 2.0' ? '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    : license == 'ISC' ? '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    : license == 'BSD 3-Clause' ? '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    : license == 'BSD 2-Clause' ? '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    : license == 'None' ? 'No License'
    : license == ''
};

//function to generate the markdown that will be written on README
function generateMarkdown(data) {
return `
# ${data.title}

## Description
${data.description}

${licenseBadge(data.license)}

## Motivation
${data.motivation}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#licenses)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credit}

## Licenses
This project is covered by the ${data.license} license.

## Testing
${data.test}

## Questions 
If you have any questions or would like to reach out for any reason, please feel free!
My Email: ${data.email}

Github: ${data.github} (https://github.com/${data.github})
`;
};

module.exports = generateMarkdown;