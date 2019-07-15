// Code your solution in this file
function findMatching(drivers, name){
    return  drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });

}

function fuzzyMatch(drivers, subString){
    return  drivers.filter(function (driver) { return driver.startsWith(subString) });

}

function matchName(drivers, name){
    return  drivers.filter(function (driver) { return driver.name === name; });

}