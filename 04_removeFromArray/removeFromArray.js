const removeFromArray = function(initialArray, ...restParams) {
    const finalArray = [];
    for (item of initialArray) {
        if (restParams.indexOf(item) === -1)
        {
            finalArray.push(item);
        }
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
