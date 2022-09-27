// Code your solution here

function findMatching(array, string) {

    return array.filter(element => {
        return (element === string || element === string.toLowerCase())
    })
}

function fuzzyMatch(array, string) {

    return array.filter(element => {
        return element.startsWith(string)
    })
};


function matchName(array, string) {
    
    // let names = [];

    // array.filter(element => {
    //     for (const element of array) {
    //         if (element.name === string) {
    //             return names.push(element)
    //         };
    //     };
    // });
    // return names;
    return array.filter(element => {
        return element.name === string
    })
};
