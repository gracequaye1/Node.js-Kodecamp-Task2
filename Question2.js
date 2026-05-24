function findCommonElements(arr1, arr2, arr3) {

    let result = [];

    for (let i = 0; i < arr1.length; i++) {

        let value = arr1[i];

        if (
            arr2.includes(value) &&
            arr3.includes(value)
        ) {
            result.push(value);
        }
    }

    return result;
}

const a = [1, 2, 3, 4];
const b = [3, 4, 5];
const c = [3, 4, 5, 6];

console.log(findCommonElements(a, b, c));