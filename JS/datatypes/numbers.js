/**
Number — deep dive (everything you need to know)

JavaScript has a single built-in numeric primitive called Number (except for BigInt). Under the hood it uses IEEE-754 double-precision binary floating point (64 bits). That one fact explains most weirdness. Below I’ll cover representation, limits, special values, pitfalls, useful APIs, conversion/coercion rules, and practical tips with examples you can run.

1) Representation & basics

Format: IEEE-754 double precision (64 bits) — 1 sign bit, 11 exponent bits, 52 fraction (mantissa) bits.

What it can represent: approx ±1.7976931348623157e308 (Number.MAX_VALUE) down to ±5e−324 (Number.MIN_VALUE), and discrete integers exactly up to ±(2²⁵³ − 1).

No separate integer type. Integers and floats are the same type.

2) Special numeric values
NaN                 // Not-a-Number (result of invalid numeric operation)
Infinity            // Positive infinity (overflow or division by 0)
-Infinity           // Negative infinity
+0 and -0           // Two zero representations (compare equal)


NaN is not equal to anything, even itself (NaN !== NaN). Use Number.isNaN(x).

typeof NaN === "number".

1 / 0 === Infinity, 1 / -0 === -Infinity.

3) Safe integers & precision

Safe integer range: Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGER === 2**53 - 1 === 9007199254740991.

Why “safe”? Beyond ±2²⁵³, integer representation loses precision — consecutive integers can’t be distinguished.

9007199254740992 === 9007199254740993  // true  (precision lost)


If you need exact integer math beyond that, use BigInt.

4) Floating point rounding and common pitfalls

Because numbers are stored in binary fractional form, many decimal fractions aren’t exact:

0.1 + 0.2 === 0.3   // false
0.1 + 0.2           // 0.30000000000000004


Why: 0.1 and 0.2 cannot be represented exactly in binary floating point, so results have small rounding errors.

How to compare floats safely:

function almostEqual(a, b, eps = Number.EPSILON) {
  return Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
}
almostEqual(0.1 + 0.2, 0.3); // true (with a good eps strategy)


Number.EPSILON ≈ 2.220446049250313e-16 and is the difference between 1 and the smallest representable >1.

5) +0 vs -0

+0 === -0 is true.

But 1 / +0 === Infinity and 1 / -0 === -Infinity — you can detect sign with 1/x.

Object.is(+0, -0) distinguishes them: Object.is(+0, -0) // false.

6) NaN behavior

NaN !== NaN so use:

Number.isNaN(x) (recommended) — only true for actual NaN.

isNaN(x) (global) first coerces argument to number then checks — results can surprise.

Number.isNaN("hello") // false
isNaN("hello")        // true (because "hello" -> NaN after coercion)

7) Conversions & parsing

Number(value) converts to numeric primitive (strict conversion).

+value is shorthand for Number(value).

parseInt(str, radix) parses integer prefix and ignores trailing non-numeric chars. Use radix ALWAYS (parseInt("10", 10)).

parseFloat(str) parses a floating prefix.

Number("123") === 123
Number("123px") === NaN
parseInt("123px", 10) === 123
parseFloat("3.14abc") === 3.14
+"42" === 42

8) Numeric literals & syntax sugars

Decimal: 123, 3.14

Exponent: 1e6 (1,000,000)

Hex, binary, octal: 0xFF, 0b1010, 0o755

Numeric separator (ES2021): 1_000_000 (ignored at runtime)

Leading zeros: 012 can be ambiguous — prefer explicit forms.

9) Useful Number APIs & methods

Number.isFinite(x) — true only if typeof x === 'number' and is finite (no coercion).

Number.isInteger(x) — true if integer within number representation.

Number.isSafeInteger(x) — check safe integer range.

Formatting:

num.toFixed(digits) → string with fixed decimals (rounded).

num.toExponential(k) → exponential notation.

num.toPrecision(k) → significant digits.

num.toString(radix) → convert to string with base.

let n = 123.456;
n.toFixed(2)       // "123.46"
n.toString(16)     // "7b.74..." (hex)

10) Coercion rules & arithmetic with other types

Arithmetic operators (+, -, *, /, %) coerce operands to Number (except + also concatenates strings).

+ with a string performs concatenation: "1" + 2 === "12". If both operands non-string, + performs numeric addition.

== can coerce types; prefer === to avoid surprises.

"5" - 1 // 4 (string coerced to number)
"5" + 1 // "51" (string concatenation)

11) Bitwise operators and 32-bit conversion

Bitwise operators convert values to signed 32-bit integers (two’s complement) internally. This can be used for integer hacks but beware of truncation and sign.

5 | 0    // 5 (fast way to truncate to 32-bit int)
1 << 31  // negative because high bit flips sign in 32-bit


Because of the 32-bit conversion, bitwise ops are not safe for >32-bit integers.

12) Sorting and comparisons gotchas

arr.sort() sorts lexicographically by default (strings), so for numbers pass a comparator:

[10,2,30].sort()            // [10,2,30]  (lexicographic)
[10,2,30].sort((a,b)=>a-b) // [2,10,30]


Comparisons behave as expected for normal numbers, but remember NaN is not comparable.

13) Performance considerations

Primitive Number operations are fast and optimized in engines.

Avoid excessive boxing/unboxing (e.g., using new Number(...) wrapper) — always use number primitives.

Using BigInt is slower than Number and not supported everywhere.

14) Interop with BigInt

Do not mix Number and BigInt in arithmetic:

1n + 2    // TypeError
1n + 2n   // OK
Number(1n) // may lose precision if BigInt too large


Convert consciously: Number(big) or BigInt(num) (if safe and integral).

15) Practical rules & best practices

Use Number for most numeric needs; use BigInt for very large integers or exact integer math.

Never rely on strict equality for float comparisons; use an epsilon strategy.

Use Number.isNaN() and Number.isFinite() to avoid false positives from coercion.

Use parseInt/parseFloat when parsing strings with trailing non-numeric text; use Number() when you want strict conversion.

Use comparator in Array.prototype.sort for numeric arrays.

Avoid new Number() / Object(Number(...)) — they create objects, not primitives.

16) Examples — quick reference
// precision
console.log(0.1 + 0.2);           // 0.30000000000000004

// safe integers
console.log(Number.MAX_SAFE_INTEGER); 
console.log(Number.isSafeInteger(9007199254740992)); // false

// NaN checks
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true

// parsing
console.log(Number("  42 ")); // 42
console.log(parseInt("42px", 10)); // 42

// formatting
let n = 12345.6789;
console.log(n.toFixed(2)); // "12345.68"

// comparisons
console.log(Object.is(+0, -0)); // false
console.log(1/0);               // Infinity
 */