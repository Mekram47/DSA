var n = 5;
var s = "";
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (i == j && i + j == n + 1) {
            s += "X";
        }
        else if (i == j) {
            s += "\\";
        }
        else if (i + j == n + 1) {
            s += "/";
        }
        else {
            s += "-";
        }
    }
    s += "\n";
    console.log(s);
}
