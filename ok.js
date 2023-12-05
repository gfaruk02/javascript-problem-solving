function cubeNumber(number) {
    if(typeof number !== 'number' || number <= 0) {
        return "please enter a positive number";
    }
    else{
        const cubeCalculation = number * number * number;
        return cubeCalculation;
    }
}


function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return 'Plese Provide String';
    }
    else if(string1.match(string2)){
        return true;
    }else{
        return false;
    }
}


function sortMaker(arr) {
    const x = arr[0];
    const y = arr[1];
    if(!Array.isArray(arr)){
        return "Please provide me a valid number array"
    }
    else if(typeof x !== "number" || typeof y !== "number" ){
        return "Please provide me Array of Number positive or nagetive"
    }
    else{
        if(x >= 0 && x !== y && y >= 0 ){
            if(x > y){
                return [x,y];
            }else{
                return [y,x];
            }
        }
        else if(x === y ){
            return "equal";
        }
        else{
            return 'Invalid Input'
        }
    }
}


function findAddress(obj) {
    if(typeof obj !== "object"){
        return "Please Enter a valid object";
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street +","+ house +","+society;
    }
}


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