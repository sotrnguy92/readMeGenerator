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

## Installation

## Usage

## License

## Contributing

## Tests

## Questions

`;
}

module.exports = generateMarkdown;
