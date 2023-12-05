function canPay(changeArray, totalDue) {
    if(!Array.isArray(changeArray)) {
        return "Please provide me an Array"
    }
    else {
        let sum = 0;
        for(let i = 0; i < changeArray.length; i++) {
            // if(typeof changeArray[i] !== "number") {
            if( changeArray[0] !== "number") {
                return "this is empty array"
            }
            else {
                const index = i;
                const element = changeArray[index];
                sum = sum + element;
            }
        }
        if(sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }    
}
const changeArray =[ , 8, 1];
const totalDue = 10;
const result = canPay(changeArray, totalDue)
console.log(result);
