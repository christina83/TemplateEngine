const filesystem = require('fs');


function render(template, data) {   

    const content = filesystem.readFileSync(template);
    const contentAsString = content.toString();

    var regex_scriplet = /<%=.*%>/;
    var regex_expression = /<%.*%>/;
    var regex_literal = /<.*>/;

    let scriplet = contentAsString.match(regex_scriplet);
    if (scriplet) {
        scriplet = result[0];
        const index_of_scriplet = result[1];
    }

    // scriplet direkt ersetzen mit regex methode (siehe mdn)

    
     
};


exports.render = render;


/* TODO
- DONE: Engine liest template ein
- DONE: Engine spuckt template als array aus
- DONE: Läuft über jedes Element (char) in Array
- Entscheidet, ob einer der 3 Fälle eingetreten ist durch das char
- danach das Literal, die Expression oder das Scriplet mit Hilfe der 3 Funktionen einlesen

- Immer auskommentierten Code am Ende des Arbeitstages löschen (intellektuelle und emotionale Belästigung)
- if Schleifen geraten außerhalb des Codes (mit i-1 bei index 0)
- ich habe die verzweigung am anfang nicht richtig gemacht mit den 3 fällen, über die ich an relevantem js-code stolpern kann (plain html, 
    js-ausdruck und js-auszuführender code) 
- stattdessen bin ich direkt in den einen spezialfall reingegangen (js-ausdruck)
*/