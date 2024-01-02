//function to add certain license badge depending on selection
function licenseBadge(license) {
    
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
    This license is covered by the ${data.license} license.
    
    ## Testing
    ${data.test}
    
    ## Questions 
    If you have any questions or would like to reach out for any reason, please feel free!
    My Email: ${data.email}
  
    Github: ${data.github} (https://github.com/${data.github})
    `;
  };

module.exports = generateMarkdown;