function generateMarkdown(data) {
  return `
# ${data.project}

\\license will go here

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}


## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions


`;
}

module.exports = generateMarkdown;
