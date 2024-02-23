var n = 5;
var s = "";
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (i == j) {
            s += "\\";
        }
        else {
            s += "-";
        }
    }
    console.log(s);
}
