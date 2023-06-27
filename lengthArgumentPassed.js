/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    var count = 0;
    for(var i of args){
        if(i === null){
            count++;
            continue;
        }
        if(typeof i === "object"){
            count++;
        }
        else{
            count++;
        }
    }
    return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
