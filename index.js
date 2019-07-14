function findMatching(drivers, name){
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
      });
}

function fuzzyMatch(drivers, namePart){
    let nameLength = namePart.length;
    return drivers.filter(function(driverName){
        return driverName.toLowerCase().slice(0, namePart.length) === namePart.toLowerCase();
    });
}

function matchName (drivers, name) {
    return drivers.filter(function(driver){
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}
