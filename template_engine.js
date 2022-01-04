let FileReader = require('filereader');

const render = (template, data) => {
    let filereader = new FileReader();
    console.log(filereader.result);
}

module.exports.render = render;