function sortMaker(arr) {
    let x = arr[0];
    let y = arr[1];
    if(!Array.isArray(arr)){
        return "Please provide me a valid number array"
    }
    else if(typeof x !== "number" || typeof y !== "number" ){
        return "Please provide me Array of Number positive or nagetive"
    }
    else{
        if(x >= 0 && x !== y && y >= 0 ){
            if(x > y){
               const temp = x;
               x = y;
               y = temp;
                return arr;
            }
            else{
            const temp =y;
                y = x;
               x = temp;
               
                // return [y,x];
                return arr;
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


// const number = [0, 1];
// const number = [110, -110];
// const number = [10, 10];
const number = [5, 10];
// const number = ['far', 10];
console.log(sortMaker(number));