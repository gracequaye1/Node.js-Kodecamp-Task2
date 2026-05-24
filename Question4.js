function kebabToCamel(str) {

    let parts = str.split("-");

    let result = parts[0];

    for (let i = 1; i < parts.length; i++) {

        let word = parts[i];

        result += word[0].toUpperCase() + word.slice(1);
    }

    return result;
}

console.log(kebabToCamel("hello-there"));
console.log(kebabToCamel("i-love-javascript"));