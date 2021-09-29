export function mergeArrays(...arrays) {
    let jointArray = [];
    arrays.forEach((array) => {
        jointArray = [...jointArray, ...array];
    });

    const uniqueArray = jointArray.filter(
        (item, index) => jointArray.indexOf(item) === index
    );
    return uniqueArray;
}
