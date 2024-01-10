const reverseString = function(initialString) {
    const initialStringArray = initialString.split("");
    let finalString = ""
    for (let i = initialStringArray.length - 1; i >= 0; i--) {
        finalString += initialStringArray[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
