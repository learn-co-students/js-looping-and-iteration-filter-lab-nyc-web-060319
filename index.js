// Code your solution in this file
function findMatching(array, name){
    return array.filter(function(ele){return ele.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(array, string) {
    return array.filter(function(ele){return ele.slice(0,2) === string.slice(0,2)});
}

function matchName(array, name) {
    return array.filter(function(obj){return obj.name === name});
}