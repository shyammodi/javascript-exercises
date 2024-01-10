const sumAll = function(firstNumber, secondNumber) {
    if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number' || firstNumber < 0 || secondNumber < 0) {
        return "ERROR"
    }
    else {
        let smallerNumber;
        let largerNumber;
        if (firstNumber <= secondNumber) {
            smallerNumber = firstNumber;
            largerNumber = secondNumber;
        }
        else {
            smallerNumber = secondNumber;
            largerNumber = firstNumber;
        }

        let theSum = 0;
        for (let i = smallerNumber; i <= largerNumber; i++)
            theSum += i;
        return theSum;
    }

};

// Do not edit below this line
module.exports = sumAll;
