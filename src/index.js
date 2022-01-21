const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let fin=[]
    
    expr=expr.split('**********')
             .map(x=>{
                let tempArr=[];
                while (x.length>0) {
                    tempArr.push(x.slice(0,10));
                    x=x.slice(10);
                }
                return tempArr;
             })
             .map( x=> x.map(y=>y.slice(y.indexOf('1'))) );


    return expr.map(x=>x.map(y=>y.replace(/10/g, '.').replace(/11/g, '-')))
               .map(x=>x.map(y=>MORSE_TABLE[y]).join(''))
               .join(' ');

}

module.exports = {
    decode
}
