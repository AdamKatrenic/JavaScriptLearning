//map

const numbers = [1,2,3,4,5,6,7,8,9,10];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cube);

function square(element){
    return Math.pow(element,2)
}

function cube(element) {
    return Math.pow(element,3)
}

