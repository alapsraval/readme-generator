// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return;
  //license link from the website
  return `![license badge](https://img.shields.io/badge/license-${license}-informational)`; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, copy_right_name) {
  return `Copyright &copy; ${copy_right_name}. All rights reserved.

Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}.

## Table of Contents
1. [Dependencies](#dependencies)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tests](#tests)
5. [Contributions](#contributions)
6. [Contact](#contact)
7. [License](#license)

## Getting Started
### Dependencies
${data.depedencies}

### Installation
\`${data.installation}\`

### Usage
\`${data.usage}\`

### Tests
\`${data.tests}\`

## Contributions
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### Current contributors
${data.contributor_name || 'None'} ${data.contributor_github ? `[GitHub](https://github.com/${data.contributor_github})`:``}

## Contact
Checkout my [GitHub](https://github.com/${data.github}).

For additional questions, feel free to reach out to me at ${data.email}.

## License
${renderLicenseSection(data.license, data.copy_right_name)}
`;
}

module.exports = generateMarkdown;