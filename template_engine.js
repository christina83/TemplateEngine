const filesystem = require('fs');

function render(template, data) {

    const content = filesystem.readFileSync(template);
    const contentstring = content.toString();
    const chars = contentstring.split('');

    for (let i = 0; i < chars.length; i++) {
        
    }
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
- Immer auskommentierten Code am Ende des Arbeitstages löschen (intellektuelle und emotionale Belästigung)
- if Schleifen geraten außerhalb des Codes (mit i-1 bei index 0)
- ich habe die verzweigung am anfang nicht richtig gemacht mit den 3 fällen, über die ich an relevantem js-code stolpern kann (plain html, 
    js-ausdruck und js-auszuführender code) 
- stattdessen bin ich direkt in den einen spezialfall reingegangen (js-ausdruck)
*/