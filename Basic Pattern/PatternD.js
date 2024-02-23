var n = 17;
function Diamond(n) {
    var star = 1;
    var spaces = Math.floor(n / 2);
    var s = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= spaces; j++) {
            s += " ";
        }
        for (var j = 1; j <= star; j++) {
            s += "*";
        }
        s += "\n";
        if (i <= Math.floor(n / 2)) {
            star += 2;
            spaces -= 1;
        }
        else {
            star -= 2;
            spaces += 1;
        }
    }
    console.log(s);
}
Diamond(n);
