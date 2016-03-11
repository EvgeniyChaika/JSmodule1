function pow() {
    var a = prompt("Enter the number :", "");
    a = parseInt(a);
    console.log("Number: " + a);
    var b = prompt("Enter the number of involution :", "");
    b = parseInt(b);
    console.log("Involution: " + b);

    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        a !== a ||
        b !== b) {
        alert("Error enter! You can only enter numbers!");
        pow();

    } else {
        if (b == 0) {
            return console.log("Result: 1");
        }
        if (b < 0) {
            alert("Only positive number!");
            pow();
        } else {
            var result = 1;
            for (var i = 1; i <= b; i++) {
                result *= a;
            }
            console.log("Result: ", result);
        }
    }
}
pow();