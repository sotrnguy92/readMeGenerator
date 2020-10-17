const github = require ('./api.js');

async function generateMarkdown(data) {
  let licenseBadge = '';
  let licenseURL = '';
  const gitData = await github.getGithub(data.username)
  switch (data.license){
    case `MIT`:
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)';
      licenseURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      licenseURL = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Apache license 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      licenseURL = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Do What The F*ck You Want To Public License':
      licenseBadge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/txt/copying/)';
      licenseURL = 'http://www.wtfpl.net/txt/copying/';
      break;
    case 'BSD 3-Clause license':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      licenseURL = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'GNU General Public License version 3':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
      licenseURL = 'https://opensource.org/licenses/GPL-3.0';
      break;
  }
  return `
# ${data.project}

${licenseBadge}

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
To install the required dependencies run the following command:
${data.install}

## Usage
${data.usage}

## License
${data.license} ${licenseURL}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
${data.test}

## Questions

Ask any questions by opening an issue with [${data.github}](https://github.com/${data.github}) or contact through email at ${gitData.email}.


© ${data.year} ${data.name}

`;
}

module.exports = generateMarkdown;
