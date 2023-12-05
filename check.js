// let array = [28,98]; 
function sortMaker(arr) {
    let x = arr[0]; 
    let y = arr[0]; 
    for (let i = 1; i < arr.length; i++){
        if(!Array.isArray(arr)){
            return "Please provide me a valid number array"
        }else if(typeof x !== "number" || typeof y !== "number" ){
            return "Please provide me Array of Number positive or nagetive"
        }
        else{
            if(x >= 0 && x !== y && y >= 0 ){
                if (arr[i] > x){
                    // return ("["+x+","+y+"]");
                    return [x,y];
                }
                else if (arr[i] < y){
                    return [y,x];
                }
            }
             else{
                return 'Invalid Input';
            }
        }     
    }
}
// const number = "far";
// const number = [0, 1];
// const number = [110, -110];
const number = [10, 10];
// const number = [15, 10];
// const number = ['far', 10];
console.log(sortMaker(number));



// for (let i = 1; i < array.length; i++) { 
//    if (array[i] > max) 
        
//       max = array[i]; 
//     console.log([max,min]);
//    if (array[i] < min) 
//       min = array[i]; 
//       console.log([min,max]);
//  } 