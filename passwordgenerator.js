function changeVocals(str) {
    //code di sini
    var vocalChange = 'abijuvefopABIJUVEFOP';
    var stringFix = str;
    for (var i = 0; i < stringFix.length; i++) {
       for (var j = 0; j < vocalChange.length; j+=2) {
           if (str[i] === vocalChange[j]) {
               stringFix = stringFix.replace(str[i], vocalChange[j+1]);
            }
        }
        // console.log(stringFix[i])
    }
    return stringFix;
}  

// console.log(changeVocals('hey YOU') );
function reverseWord(str) {
    //code di sini
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// console.log(reverseWord('hey'));


function setLowerUpperCase(str) {
    //code di sini
    var alfa = 'abcdefghijklmnopqrstuvwxyz';
    var alfaC = 'ABCDEFGHIJLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = 0; i < str.length; i++) {
        for (var j= 0; j < alfa.length; j++) {
            if (str[i]==alfa[j]) {
                result += str[i].toUpperCase();
            }else if (str[i] == alfaC[j]) {
                result += str[i].toLowerCase();
            }
        }
    }
    return result;
}


function removeSpaces(str) {
    //code di sini
    var spaceRemoved = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            spaceRemoved += '';
        }else {
            spaceRemoved += str[i];
        }
    }
    return spaceRemoved;
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah lima karakter.'
    }
    var changedVocals = changeVocals(name);
    // console.log(changedVocals,'<= vocal');
    var reverse = reverseWord(changedVocals);
    var lowerToUpper = setLowerUpperCase(reverse);  
    var spaceRemoved = removeSpaces(lowerToUpper);
    return spaceRemoved;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'