// code your solution here


function superbowlWin(array){
    let result = array.find(record => record.result === "W")
    if (result !== undefined){
        return result.year
    }
}

