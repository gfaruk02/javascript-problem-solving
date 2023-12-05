function sortMaker(arr) {
    const x = arr[0];
    const y = arr[1];
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


// const number = [0, 1];
// const number = [110, -110];
const number = [10, 10];
// const number = [15, 10];
// const number = ['far', 10];
console.log(sortMaker(number));