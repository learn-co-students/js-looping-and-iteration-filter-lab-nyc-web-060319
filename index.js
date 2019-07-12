'use strict'
// Code your solution in this file
function findMatching(drivers, string) {
    return drivers.filter(function(drv){return drv.toUpperCase() == string.toUpperCase();});
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(drv){return drv.substring(0, letters.length) === letters;});
}

function matchName(drivers, name) {
    return drivers.filter(function(drv){return drv.name === name;});
}