const sumAll = function(par1, par2) {

    if ((!Number.isInteger(par1)) || (!Number.isInteger(par2))){
        return "ERROR";
    }

    if ((par1 < 0) || (par2 < 0)){
        return "ERROR";
    }

    let result = 0;

    if (par1 < par2){
        let start = par1;
        let end = par2;

        for (let i = par1; i <= par2; i++){
            result += i;
        }
    }

    else {
        let start = par2;
        let end = par1;
        for (let i = par2; i <= par1; i++){
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
