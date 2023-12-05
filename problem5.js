function canPay(changeArray, totalDue) {
    if(!Array.isArray(changeArray)) {
        return "Please provide me an Array"
    }
    else {
        let sum = 0;
        for(let i = 0; i < changeArray.length; i++) {
            if(typeof changeArray[i] !== "number") {
                return "Please provide me a number of Array"
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
const changeArray =[1, 8, 5];
const totalDue = 10;
const result = canPay(changeArray, totalDue)
console.log(result);
