function findMatching(array, name){
    return array.filter(function(ele){return ele.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(ele) {return ele[0] === string[0]});
}

function matchName(drivers, string) {
    return drivers.filter(function(object) {return object.name === string});
}