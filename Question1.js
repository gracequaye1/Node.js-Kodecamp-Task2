function flattenArray(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            result.push(arr[i][j]);
        }
    }

    return result;
}

const input = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

console.log(flattenArray(input));