/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    // If the objects are identical or both null, return true.
    if (o1 === o2) {
        return true;
    }
    // If either object is not an object or is null, they are not equal.
    if (typeof o1 !== 'object' || o1 === null ||
        typeof o2 !== 'object' || o2 === null) {
        return false;
    }
    // Check if both objects are arrays or not.
    const isArray1 = Array.isArray(o1);
    const isArray2 = Array.isArray(o2);
    if (isArray1 !== isArray2) {
        return false;
    }
    // If both objects are arrays, check if their length and contents are equal.
    if (isArray1 && isArray2) {
        return o1.length === o2.length &&
            o1.every((val, i) => areDeeplyEqual(val, o2[i]));
    }
    // If both objects are objects, check if they have the same keys and values.
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    // Use the every method to check if all keys in o1 are also present in o2
    // and that their values are deeply equal.
    return keys1.every(key => {
        if (!keys2.includes(key)) {
        return false;
        }
        return areDeeplyEqual(o1[key], o2[key]);
    });   
};
