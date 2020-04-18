'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let str = s,i,str1="";
    
    for(i=0;i<str.length;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
        {
            console.log(str[i]);
        }
        else
        {
            str1 += str[i];
        }
    }
    for(i=0;i<str1.length;i++)
    {
        console.log(str1[i]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}