/**

Here is a **complete, deep, crystal-clear explanation of the JavaScript `Boolean` datatype**, written in the same detailed style as Number, BigInt, and String.

---

# 🔥 **What is a Boolean in JavaScript?**

A **Boolean** is a *primitive datatype* that represents **only two values**:

### ✔ `true`

### ✔ `false`

Booleans are the foundation of:

* Conditions (`if`, `else`)
* Loops (`while`, `for`)
* Comparisons (`==`, `===`, `>`, etc.)
* Logical operations (`&&`, `||`, `!`)
* Controlling flow of programs

---

# 🚦 Why Boolean exists?

Every decision in programming is basically:

* Should we do this? → yes or no
* Is this true? → yes or no
* Is this equal? → yes or no

Boolean gives that **binary truth value**.

---

# ⭐ **How to create a Boolean**

### 1️⃣ Direct literal values

```js
let isLoggedIn = true;
let isAdmin = false;
```

### 2️⃣ Using Boolean() constructor (converts values)

```js
Boolean(1);      // true
Boolean(0);      // false
Boolean("hi");   // true
Boolean("");     // false
```

### 3️⃣ Using new Boolean() (creates object, NOT recommended)

```js
let x = new Boolean(true); // object, not primitive
```

---

# 🔥 **Boolean is a Primitive & Immutable**

Just like Number and String:

* Booleans are **primitive**
* They cannot be changed (immutable)
* Operations on Booleans create new values

Example:

```js
let x = true;
// You cannot mutate true → false
```

---

# 🧠 **Truthy vs Falsy Values (Very Important)**

JavaScript automatically converts values to Boolean when needed.

There are **exactly 7 falsy values**:

| Falsy value | Notes          |
| ----------- | -------------- |
| `false`     | boolean false  |
| `0`         | number zero    |
| `-0`        | negative zero  |
| `""`        | empty string   |
| `null`      | nothing        |
| `undefined` | not assigned   |
| `NaN`       | invalid number |

Everything else is **truthy**:

✔ `"hello"`
✔ `" "`
✔ `[]`
✔ `{}`
✔ `function(){}`
✔ `42`
✔ `Infinity`
✔ `new Date()`

Example:

```js
if ("suraj") console.log("truthy"); // prints
if (0) console.log("falsy");        // does not print
```

---

# 🔍 **Boolean in Comparisons**

### Strict comparison

```js
true === 1     // false
false === 0    // false
```

### Loose comparison (performs conversion)

```js
true == 1      // true
false == 0     // true
"" == false    // true
"0" == false   // true (because "0" → 0 → false)
```

⚠️ **Loose equality is confusing.
Always use `===` in real projects.**

---

# 🔐 **Logical Operators**

### 1️⃣ AND → `&&`

Both must be true.

```js
true && true  // true
true && false // false
```

Short-circuit:

```js
false && anything → returns false immediately
```

---

### 2️⃣ OR → `||`

At least one true.

```js
true || false  // true
false || false // false
```

Short-circuit:

```js
true || anything → returns true immediately
```

---

### 3️⃣ NOT → `!`

Flips the value.

```js
!true  // false
!false // true
```

Double NOT (`!!`) converts to Boolean:

```js
!!"suraj"  // true
!!0        // false
```

---

# 🧨 Boolean Object (rarely used)

```js
let x = new Boolean(false);
console.log(x); // [Boolean: false]
```

⚠ Dangerous because:

```js
if (new Boolean(false)) console.log("runs");
```

It runs because the object is **truthy**.

Always prefer primitive `true` / `false`, not objects.

---

# 💡 Boolean in Conditions (Automatic Coercion)

JavaScript automatically converts things to Boolean in `if()`, `while()`, etc.

Example:

```js
if ([]) console.log("Runs"); // empty array is truthy
if ({}) console.log("Runs"); // empty object is truthy
if ("") console.log("No");   // empty string is falsy
```

---

# 🔥 Real-world examples

### Checking if user logged in

```js
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome Suraj!");
}
```

### Validating form fields

```js
let username = "";

if (!username) {
  console.log("Username required");
}
```

### Toggling a value

```js
let mode = true;
mode = !mode; // flip
```

---

# 🎯 Summary (Easy to Remember)

| Property     | Value                |
| ------------ | -------------------- |
| Type         | Primitive            |
| Values       | `true` / `false`     |
| Immutable    | Yes                  |
| Object form  | Bad, avoid           |
| Truthy/falsy | automatic conversion |
| Operators    | &&, ||, !            |
 



 */