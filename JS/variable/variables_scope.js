// ---------------------------
// 1. NO KEYWORD (BAD PRACTICE REDECLEARATION  ALLOWED)
// ---------------------------
function noKeywordExample() {
    if (true) {
        x = 100;          // becomes GLOBAL variable (ONLY in non-strict mode)
        console.log("Inside block (no keyword):", x);
    }
}

noKeywordExample();
console.log("Outside function (no keyword):", x); // still works → global leak


// ---------------------------
// 2. VAR (FUNCTION SCOPE REDECLEARATION  ALLOWED)
// ---------------------------
function varExample() {
    if (true) {
        var a = 10; // function scoped, ignores block
        console.log("Inside block (var):", a);
    }

    console.log("Outside block but inside function (var):", a); // works
}

varExample();
// console.log(a); // ❌ error → var does not escape function


// ---------------------------
// 3. LET (BLOCK SCOPE REDECLEARATION NOT ALLOWED)
// ---------------------------
function letExample() {
    if (true) {
        let b = 20; 
        console.log("Inside block (let):", b);
    }

    // console.log(b); // ❌ error → block scoped
}

letExample();


// ---------------------------
// 4. CONST (BLOCK SCOPE REDECLEARATION NOT ALLOWED)
// ---------------------------
function constExample() {
    if (true) {
        const c = 30;
        console.log("Inside block (const):", c);

        // c = 40; // ❌ error → cannot reassign const
    }

    // console.log(c); // ❌ error → block scoped
}

constExample();


// ---------------------------
// 5. CONST ARRAY/OBJECT (MUTABLE CONTENT)
// ---------------------------
function constObjectExample() {
    const arr = [1, 2, 3];
    arr.push(4); // allowed

    const obj = { name: "Suraj" };
    obj.name = "Rajput"; // allowed

    console.log("Const array:", arr);
    console.log("Const object:", obj);

    // arr = [5,6]; // ❌ error → can't reassign
    // obj = {};    // ❌ error → can't reassign
}

constObjectExample();



