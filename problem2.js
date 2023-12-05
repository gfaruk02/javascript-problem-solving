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
// const result = matchFinder('Peter Parker','pet');
const result = matchFinder('John Doe', 'ohn');
console.log(result);