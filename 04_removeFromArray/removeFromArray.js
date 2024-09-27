const removeFromArray = function(array, ...elementRemoved) {
    let filteredArray = array;
    console.log(filteredArray)
    console.log(elementRemoved)
    for (const element of elementRemoved){
        console.log(filteredArray.indexOf(element))
        filteredArray = filteredArray.filter((word) => word !== element);
       console.log(filteredArray);
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
