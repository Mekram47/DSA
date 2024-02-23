var n = 7;
function diamond(n) {
    var star = 1;
    var spaces = Math.floor(n / 2);
    var s = "";
    for (var i = 1; i <= n; i++) {
        // For adding spaces 
        for (var j = 1; j <= spaces; j++) {
            s += " ";
        }
        // for adding stars 
        for (var j = 1; j <= star; j++) {
            s += "*";
        }
        s += "\n";
        if (i < Math.floor(n / 2)) {
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
diamond(n);
