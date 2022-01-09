const filesystem = require('fs');
var DomParser = require('dom-parser');
var domparser = new DomParser();

function render(template, data) {
    const doc = domparser.parseFromString(template, "text/html");
    console.log(doc);
    //console.log(doc.lastChild.data);


    /* const content = filesystem.readFileSync(template);
    const contentstring = content.toString();
    const chars = contentstring.split('');

    for (let i = 0; i < chars.length; i++) {
        if(chars[i] == '%') {
            if(chars[i-1] == '<') {
                if(chars[i+1] == '=') {
                    if(chars[i+2] == ' ') {                        
                        let searchedWord = chars.split('')[3];
                        console.log(searchedWord);
                        // Ich könnte das html auch nach tags splicen, dann im entsprechenden tag das ganze einlesen und am ende das _%> 
                        // abschneiden (map?)
                    }                    
                }
            }
        }
    } */
};

exports.render = render;


/* TODO
- DONE: Engine liest template ein
- DONE: Engine spuckt template als array aus
- DONE: Läuft über jedes Element (char) in Array
- DONE: sobald ein % kommt
    - DONE: guckt, ob das Zeichen davor ein < war
    - DONE: wenn ja, guckt, ob das Zeichen danach ein Leerzeichen oder ein = ist
    - wenn ein = ist, liest die folgende zusammenhängende char Abfolge ein
    - vergleicht das Wort mit den keys im data object
    - wenn Wort = key ist, dann wird Wort durch Value ersetzt
*/