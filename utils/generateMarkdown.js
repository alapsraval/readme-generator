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
function renderLicenseSection(license) {
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Getting Started
### Dependencies
\`${data.depedencies}\`

### Installation Instructions
\`${data.installation}\`

### Usage
${data.usage}

## Contributions
${data.contributor_name} [GitHub](https://github.com/${data.contributor_github})

## Tests
\`${data.tests}\`

## Contact me
Checkout my [GitHub](https://github.com/${data.github})

For additional questions, feel free to reach out to me at ${data.email}.

## License
Copyright &copy; ${data.copy_right_name}. All rights reserved.
Licensed under the ${data.license} license. 
`;
}

module.exports = generateMarkdown;