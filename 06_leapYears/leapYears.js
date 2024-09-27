const leapYears = function(number) {
    if (number % 4 == 0){
        console.log("Divisible by 4");
        if (number % 100 == 0){
            console.log("Divisble by 100")
            if (number % 400 == 0){
                console.log("Divisible by 400")
                return true;
            }
            return false;
        } 

        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
