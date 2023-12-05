function sortMaker(arr) {
    let x = arr[0];
    let y = arr[1];
    if(!Array.isArray(arr)){
        return "Please provide me a valid number array"
    }
    else if(typeof x !== "number" || typeof y !== "number" ){
        return "Please provide me Array of Number positive or nagetiv"
    }
    else{
        if(x && y >= 0 && x !== y ){
            // if(x > y){
            //     return ("["+x+","+y+"]");
            // }else{
            //     return ("["+y+","+x+"]");
            // }
            // const x = Math.max(x,y); 
            // const y = Math.min(x,y);
            [ x, y ] = [ y, x ]
            // const temp = x;
            // x = y;
            // y = temp;
            return (x, y);
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
const number = [15, 10];
// const number = ['far', 10];
console.log(sortMaker(number));