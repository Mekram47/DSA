function getMax(arr) {
    var maxi = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxi)
            maxi = arr[i];
    }
    return maxi;
}
var arr = [5, 2, 3, 4, 6, 8, 1];
// console.log(getMax(arr));
function printBarChart(arr) {
    var cols = arr.length;
    var row = getMax(arr);
    while (row > 0) {
        var s = "";
        for (var j = 0; j < cols; j++) {
            if (arr[j] >= row)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
        row--;
    }
}
printBarChart(arr);
