//----------------------- Task 1 -----------------------
function pow() {
    var a = prompt("Enter the number :", "");
    var b = prompt("Enter the number of involution :", "");
    a = parseInt(a);
    b = parseInt(b);

    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        a !== a ||
        b !== b) {
        alert("error enter! You can only enter numbers!");
        pow();
    } else {
        if (b == 0) {
            return 1;
        }
        var result = 1;
        for (var i = 1; i <= b; i++) {
            result *= a;
        }
        console.log("Result: " , result);
    }
}
pow();