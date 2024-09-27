const sumAll = function(num1, num2) {
    let bigNum;
    let littleNum;
    let sumNum = 0;
    if (typeof num1 != "number" || typeof num2 != "number"){
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    if (num1 != Math.floor(num1) || num2 != Math.floor(num2)){
        return "ERROR";
    }
    if (num1 > num2) {
        bigNum = num1;
        littleNum = num2;
    } else {
        bigNum = num2;
        littleNum = num1;
    }
    for (let i = littleNum; i <= bigNum; i++){
        sumNum+=i;
    } 
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
