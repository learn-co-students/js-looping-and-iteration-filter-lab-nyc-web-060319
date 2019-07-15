// Code your solution in this file
function findMatching(drivers, string){
    const list = drivers.filter(
        function(driver){
            return driver.toUpperCase()=== string.toUpperCase();
        }
    );
    return list;
};

function fuzzyMatch(drivers, string){
    const list = drivers.filter(
        function(driver){
            const upperCaseDriverName = driver.toUpperCase();
            const upperCaseString = string.toUpperCase();
            return upperCaseDriverName.startsWith(upperCaseString);
        }
    );
    return list;
};

function matchName(drivers, string){
    const list = drivers.filter(
        function(driver){
            const name = driver.name.toUpperCase();
            return name === string.toUpperCase();
        }
    );

    return list;
};