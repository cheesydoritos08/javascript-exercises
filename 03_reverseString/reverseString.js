const reverseString = function(string) {
    let stringArray = string.split("");
    console.log(stringArray);

    let reversedString = ""
    for (i=stringArray.length-1; i>=0; i--){
        reversedString += stringArray[i];
        console.log(reversedString);
    }

    return reversedString;
    
};

// Do not edit below this line
module.exports = reverseString;
