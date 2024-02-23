function subArrayProblem(arr) {
    for (var sp = 0; sp < arr.length; sp++) {
        for (var ep = sp; ep < arr.length; ep++) {
            var res = [];
            for (var i = sp; i < ep; i++)
                res.push(arr[i]);
            console.log(res);
        }
    }
}
var arr = [9, 8, 7, 6, 5];
subArrayProblem(arr);
