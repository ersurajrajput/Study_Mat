/**
 * 

Here is the **deep, clean, and complete explanation of the JavaScript `undefined` datatype** — at the same level of detail as Number, BigInt, String, and Boolean.

---

# 🔥 **What is `undefined` in JavaScript?**

`undefined` is a **primitive datatype** in JavaScript.

It means:

> **“A variable exists, but no value has been assigned to it.”**

It is the default value created by the JavaScript engine when something *should* have a value but doesn't.

---

# ⭐ **Where does `undefined` come from?**

JavaScript automatically gives `undefined` in many cases.

Below are **all situations** where `undefined` appears.

---

# 1️⃣ **A variable declared but not assigned**

```js
let x;
console.log(x); // undefined
```

Memory allocated → value not assigned → JS sets it to undefined.

---

# 2️⃣ **A function that returns nothing**

```js
function test() {}
console.log(test()); // undefined
```

Every function in JS returns *something*.
If no return statement, JS automatically returns `undefined`.

---

# 3️⃣ **Missing function parameters**

```js
function add(a, b) {
  console.log(a, b);
}
add(10);  
// 10 undefined
```

If you pass fewer arguments → extra ones become `undefined`.

---

# 4️⃣ **Missing object properties**

```js
let user = {};
console.log(user.name); // undefined
```

Property does not exist → returns undefined, not error.

---

# 5️⃣ **Missing array elements**

```js
let arr = [10, , 30];
console.log(arr[1]); // undefined
```

Empty slot ⇒ undefined.

---

# 6️⃣ **`undefined` is the default return of `void` operator**

```js
void 0;   // undefined
void(123) // undefined
```

Rarely used.

---

# ⭐ Type of `undefined`

```js
typeof undefined; 
// "undefined"
```

This is the **only** primitive where:

```js
value === undefined  // true
typeof value === "undefined" // also true
```

---

# 💥 ❌ Important: `undefined` vs `undeclared`

**Undefined variable** → declared but not assigned
**Undeclared variable** → never declared

Example:

```js
console.log(a); // ReferenceError: a is not defined
```

But:

```js
let a;
console.log(a); // undefined
```

📌 *Don't confuse these two.*

---

# 🔥 `undefined` vs `null`

| Feature  | undefined          | null                        |
| -------- | ------------------ | --------------------------- |
| Meaning  | value not assigned | value intentionally empty   |
| Given by | JS engine          | programmer                  |
| Type     | "undefined"        | "object" (weird legacy bug) |
| Usage    | missing values     | intentional absence         |

Examples:

```js
let a;         // undefined (automatic)
let b = null;  // null (manual)
```

---

# 🧠 Boolean conversion

```js
Boolean(undefined) // false
```

`undefined` is a **falsy** value.

---

# ❌ Why comparing with == is dangerous

```js
undefined == null  // true
undefined === null // false
```

`==` treats undefined and null as equal.
This often causes bugs.

Always use **===**.

---

# 🧩 When is `undefined` bad?

### ❌ Shadowing properties:

```js
let x = undefined; // BAD — use null instead!
```

You should **rarely assign undefined manually**.
It makes debugging harder.

Use:

```js
let value = null;  // intentional empty
```

---

# 🔥 Special Case: Destructuring

Missing values become undefined:

```js
let [a, b] = [10];
console.log(a, b); // 10 undefined
```

Missing object fields:

```js
let {name, age} = {name: "Suraj"};
console.log(age); // undefined
```

---

# 🧭 Summary (Easy to Remember)

* `undefined` = **value not assigned**
* It is a **primitive**
* JS **automatically sets** it
* Caused by:
  ✔ unassigned variables
  ✔ missing function returns
  ✔ missing parameters
  ✔ missing object properties
  ✔ empty array slots
* `undefined == null` → **true**
* `undefined === null` → **false**
* Use `null` when *you* want to empty a variable
* Use `undefined` only when JS gives it





 * 
 */