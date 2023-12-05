function cubeNumber(number) {
    if(typeof number !== 'number' || number <= 0){
        return "please enter a positive number";
    }
    else{
        const cubeCalculation = number * number * number;
        return cubeCalculation;
    }
}
const cubeResult = cubeNumber('hi');
console.log(cubeResult);