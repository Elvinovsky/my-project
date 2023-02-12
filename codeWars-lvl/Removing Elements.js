function removeEveryOther(arr){
    let deleteEverySecond = [];
    for (i = 0; i < arr.length; i += 2) {
        deleteEverySecond.push(arr[i]);
    }
    return deleteEverySecond;
}
