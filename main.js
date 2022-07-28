console.log(Math.random());

const addTwo = (a, b) => {
    return a + b;
}

console.log(addTwo(1, 2));

const titleCase = (str) => {
    return str.replace(/(^|\s)\S/g, (t) => t.toUpperCase());
}

console.log(titleCase('this will be converted to titlecase'));

console.log("introducing bad commit message");