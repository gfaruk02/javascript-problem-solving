function printDetails(person){
    if(typeof person !== "object"){
        return "Please Provide me a valid Object"
    }
    else{ 
        const name = person.name || "__";
        const age = person.age || "__";
        const email = person.email || "__";
        // const bou = person.bou || "__";

        // console.log(name,age,email,bou)
        return name+","+age+","+email;
    }
}

const obj = {
    name: "faruk",
    age: 26,
    email: "gfaruk02@gmail.com"
}
console.log(printDetails(obj));