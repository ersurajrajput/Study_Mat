/*



Here is a **clear and deep explanation of BigInt in JavaScript**, in the simplest way possible.

---

# ✅ **What is BigInt in JavaScript?**

JavaScript normally stores numbers using **64-bit floating-point** format (IEEE 754).
This means it can store numbers only up to:

### **Number.MAX_SAFE_INTEGER = 9,007,199,254,740,991**

(~9 quadrillion)

After this, JavaScript cannot represent numbers accurately.

Example:

```js
console.log(9007199254740992 === 9007199254740993); 
// true 😱 (wrong!)
```

Because precision breaks.

---

# ⭐ **To fix this, JavaScript introduced BigInt.**

> **BigInt allows you to store integers of ANY size. No overflow. No precision loss.**

---

# 🔥 **How to write a BigInt in JS**

There are **two** ways:

### 1️⃣ Add `n` at the end

```js
let x = 123456789012345678901234567890n;
```

### 2️⃣ Use BigInt() constructor

```js
let x = BigInt("123456789012345678901234567890");
```

Both represent a BigInt.

---

# ⭐ BigInt vs Number

| Feature         | Number | BigInt        |
| --------------- | ------ | ------------- |
| Max safe value  | 9e15   | Unlimited     |
| Decimal allowed | Yes    | ❌ No decimals |
| Representation  | float  | integer only  |
| Performance     | Faster | Slower        |

Example:

```js
10n === 10  // ❌ false (different types)
```

---

# 🤔 Why BigInt does not support decimals?

Because BigInt is meant for **whole numbers only**.
Decimal + unlimited size = impossible in JS.

---

# 🧮 **Operations with BigInt**

You cannot mix normal Number with BigInt.

### ➤ Addition

```js
let a = 10n + 20n; 
```

### ➤ Subtraction

```js
let a = 100n - 50n;
```

### ➤ Multiplication

```js
let a = 5n * 5n;
```

### ➤ Division

**Important:** BigInt division removes decimals.

```js
10n / 3n → 3n
```

### ➤ Modulus

```js
10n % 6n → 4n
```

### ➤ Power

```js
2n ** 100n;
```

---

# 🔒 **Why BigInt is used? (Real uses)**

### ✔ Cryptography (RSA keys 1024–4096 bits)

### ✔ Blockchain calculations (ETH, BTC)

### ✔ Banking & finance (no precision loss)

### ✔ Handling big factorials or astronomy data

---

# 🧠 **BigInt cannot be used with:**

❌ `Math.max()`
❌ `Math.sin()`
❌ `console.log(10n + 1)` (mixing not allowed)

If you need to mix:

```js
let result = 10n + BigInt(1);
```

---

# 🧩 Conversions

### ➤ BigInt → Number (can lose precision)

```js
Number(10000000000000000000n);
```

### ➤ Number → BigInt

```js
BigInt(12345);
```

### ➤ BigInt → String

```js
(12345n).toString();
```

---

# 🧨 Example demonstrating why BigInt is needed

```js
console.log(9999999999999999);  
// 10000000000000000  (wrong)
```

But:

```js
console.log(9999999999999999n);  
// 9999999999999999n (correct)
```




*/
