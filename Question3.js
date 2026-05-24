function getUniqueElements(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let value = arr[i];

        let found = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === value) {
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(value);
        }
    }

    return result;
}

const input = [1, 3, 2, 3, 4, 5, 4, 2, 5, 6];

console.log(getUniqueElements(input));