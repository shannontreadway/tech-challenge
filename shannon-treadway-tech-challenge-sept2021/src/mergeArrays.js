const arrA = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
const arrB = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];
let jointArray = [];

function mergeArrays(...arrays) {
    let jointArray = [];
    arrays.forEach((array) => {
        jointArray = [...jointArray, ...array];
    });

    const uniqueArray = jointArray.filter(
        (item, index) => jointArray.indexOf(item) === index
    );
    return uniqueArray;
}
