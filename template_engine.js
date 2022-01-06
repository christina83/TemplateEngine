const filesystem = require('fs');

function render(template, data) {
    const content = filesystem.readFileSync(template);
    const contentstring = content.toString();
    const chars = contentstring.split('');
    console.log(chars);

    /* for (let i = 0; i < content.length; i++) {
        console.log(content[i]);
    } */
};

exports.render = render;


/* TODO
- DONE: Engine liest template ein
- DONE: Engine spuckt template als array aus
- Läuft über jedes Element (char) in Array
- sobald ein % kommt
    - guckt, ob das Zeichen davor ein < war
    - wenn ja, guckt, ob das Zeichen danach ein Leerzeichen oder ein = ist
    - wenn ein = ist, liest die folgende zusammenhängende char Abfolge ein
    - vergleicht das Wort mit den keys im data object
    - wenn Wort = key ist, dann wird Wort durch Value ersetzt
*/