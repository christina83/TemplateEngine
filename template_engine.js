let FileReader = require('filereader');
const filestream = require('fs');

function render(template, data) {
    const content = filestream.readFileSync(template);

    for (let i = 0; i < content.length; i++) {
        console.log(content[i]);
    }
};

exports.render = render;


/* TODO
- Engine liest template ein
- Engine spuckt template als array aus
- Läuft über jedes Element (char) in Array
- sobald ein % kommt
    - guckt, ob das Zeichen davor ein < war
    - wenn ja, guckt, ob das Zeichen danach ein Leerzeichen oder ein = ist
    - wenn ein = ist, liest die folgende zusammenhängende char Abfolge ein
    - vergleicht das Wort mit den keys im data object
    - wenn Wort = key ist, dann wird Wort durch Value ersetzt
*/