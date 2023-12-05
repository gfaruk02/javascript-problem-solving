// function findingBadData(arr){
//     if(!Array.isArray(arr)){  // array kina check korar jonno Array.isArray()
//         return "Please provide me Array of Number"
//     }else{
//         // let badData = 0;
//         for(let i = 0; i<arr.length; i++){
//             if(typeof arr[i] !== "number"){
//                 return "Please provide me Array of Number"
//             }else{

//                 // if(arr[i] === arr[i]){
//                 //     // arr.sort((a, b) => b - a);
//                 //     return true;
//                 // }
//                  if(arr[i] >= 0 ){
//                     arr.sort((a, b) => b - a);
//                     return arr;
//                 }
//                     else{
//                         return "not valid"
//                     }
//             }
//         }
//         // return badData;
//     }
   
// }
// const x=[3,-9]
// console.log(findingBadData(x))


function maxInArray(numbers){
    // console.log("Inside the Array: ", numbers);
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
       
        const index = i;
        const element = numbers[index];
        // console.log(element);
        if(element > largest){
            return arr[(a, b) = (b, a)];
        }else if(element === largest){
            largest = element;
            return "equile";
        }
        else{
            return "Invalid"
        }
    }
   
}
const heights = [300, 302,];
const tailest = maxInArray(heights);
console.log('The Tailest Number of : ', tailest );






// function sortMaker(arr) {
//     // if(!Array.isArray(arr) || typeof arr !== "number"){  // array kina check korar jonno Array.isArray()
//     if(!Array.isArray(arr)){  // array kina check korar jonno Array.isArray()
//         return "Please provide me Array of Number"
//     }
//     else {
//         let badData = 0;
//         for(let i = 0; i<arr.length; i++){
//             // if(typeof arr[i] !== "number"){
//             //     return "Please provide me Array of Number"
//             // }else{
//                 if(arr[i] === badData){
                   
//                     return 'Equel';
//                 }
//                 else if( arr[i] > 0){
//                     const outputArr = arr.sort();
//                     return outputArr;
                    
//                 }
//                 else{
//                     return "not vlid";
//                 }
//             // }

//         }
//     }
    

//     function sortMaker(arr) {
//         // if(!Array.isArray(arr) || typeof arr !== "number"){  // array kina check korar jonno Array.isArray()
//         if(!Array.isArray(arr)){  // array kina check korar jonno Array.isArray()
//             return "Please provide me Array of Number"
//         }
//         else {

//     // if (arr>=0){
//     //     const outputArr = arr.sort();
//     //     return outputArr;
//     // }
//     // else{
//     //     return "not good";
//     // }
// }
// const myArr = [15, 13]
// const result = sortMaker(myArr);
// console.log(result);



