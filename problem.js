// const object = {
//     street: 10,
//     house: “15A”,
//     society: “Earth Perfect”
// }
const object = {
    street:10 ,
    house: "15A",
    society: "Earth Perfect"
};

function findAddress(obj) {
    if(typeof obj !== "object"){
        return "Please provide me a valid object";
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
       return console.log(street,house,society);
    }

    // if(obj.street!==obj.keys || obj.house!==obj.keys || obj.society!==obj.keys){
    //     const objectpro = obj.street+","+obj.house+","+obj.society;
    //     // return objectpro;
    //     console.log(objectpro)
    // }else{
    //     const objectProperty = obj.street+","+obj.house+","+obj.society;
    //     // return objectProperty;
    //     console.log(objectProperty);
    // }
    // // return objectpro, objectProperty;
}
const result = findAddress(object);
console.log(result)