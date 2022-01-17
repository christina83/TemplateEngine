const filesystem = require('fs');


function render(template, data) {   

    const content = filesystem.readFileSync(template);
    const contentAsString = content.toString();

    var regex_scriplet = /<%=.*%>/; // Was charakterisiert diesen Fall, was bei den anderen nicht auftritt?
    var regex_expression = /<%^=.*%>/;
    var regex_literal = />^%^=.*</; // diesen Fall brauche ich doch eigentlich gar nicht

    let scriplet = contentAsString.match(regex_scriplet);
    let expression = contentAsString.match(regex_expression);
    let literal = contentAsString.match(regex_literal);
    if (literal) {
        console.log(literal[0]);  
        if(scriplet) {
            console.log(scriplet[0]); 
        } else if (expression) {
            console.log(expression[0]); 
        }    
    } else {
        console.log('Noch drüber nachdenken')
    }    
     
};


exports.render = render;


/* TODO
- DONE: Engine liest template ein
- DONE: Engine spuckt template als array aus
- DONE: Läuft über jedes Element (char) in Array
- Entscheidet, ob einer der 3 Fälle eingetreten ist durch das char
- danach das Literal, die Expression oder das Scriplet mit Hilfe der 3 Funktionen einlesen
- scriplet direkt ersetzen mit regex methode (siehe mdn)?
- if(drittes), dadrin if(erstes), elseif (das zweite), else


*/