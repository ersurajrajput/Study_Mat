/**
 
Here is the **deep, clear, and complete explanation of the JavaScript `Symbol` datatype**, written in the same detailed style as Number, BigInt, String, Boolean, Undefined, and Null.

---

# 🔥 **What is a Symbol in JavaScript?**

A **Symbol** is a **primitive** datatype introduced in ES6.

It represents:

> **A unique, immutable value used as an identifier.**

Every Symbol is **guaranteed to be unique**, even if two Symbols have the same description.

Example:

```js
let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 === s2); // false
```

Even though both descriptions are `"id"`, the symbols are **never equal**.

---

# ⭐ Why do we need Symbols?

Symbols solve a major problem in JavaScript:

### 🔹 Object keys can collide (overlap accidentally)

If you use string keys, two developers may accidentally use the same key.

Symbols allow you to add **hidden**, **non-conflicting** keys to objects.

This is especially useful in:

* Libraries
* Frameworks
* Hidden object metadata
* Private object properties
* Custom identifiers
* Unique event names

Example:

```js
let user = {};

let id = Symbol("id");
user[id] = 101;   // no conflict with any string key

console.log(user);
```

---

# ⭐ Properties of Symbols

### ✔ Unique

Each Symbol is different from every other Symbol.

### ✔ Immutable

Cannot be changed once created.

### ✔ Can be used as object keys

This is the main purpose.

### ✔ Not enumerable by default

They don’t show up in:

* `for…in`
* `Object.keys()`
* `JSON.stringify()`

So Symbols create “hidden” properties.

### ✔ Description is optional & only for debugging

```js
let sym = Symbol("my description");
console.log(sym.description);  // "my description"
```

---

# 🔥 Creating Symbols

### 1️⃣ Without description

```js
let s = Symbol();
```

### 2️⃣ With description (recommended)

```js
let s = Symbol("userId");
```

### 3️⃣ As object keys

```js
let id = Symbol("id");

let user = {
  name: "Suraj",
  [id]: 123,   // IMPORTANT: must use []
};

console.log(user[id]); // 123
```

---

# ⚠ Symbol cannot be auto-converted to string

This **throws an error**:

```js
let s = Symbol("x");
console.log("Value: " + s);
// TypeError: Cannot convert a Symbol value to a string
```

You must convert manually:

```js
console.log(String(s)); // "Symbol(x)"
```

---

# 🌍 Where Symbols are used in real world?

### ✔ Hidden properties in objects

```js
let secret = Symbol("secret");
person[secret] = "hidden value";
```

### ✔ Unique event names

```js
const EVENT_CLICK = Symbol();
```

### ✔ Avoiding property collision in libraries

Many libraries store internal metadata using Symbol keys.

### ✔ Customizing built-in behaviors

JavaScript has **Well-known Symbols** that allow you to customize object behavior.

---

# 🔥 Well-known Symbols (Advanced but important)

JavaScript defines special built-in symbols:

| Symbol                 | Use Case                          |
| ---------------------- | --------------------------------- |
| `Symbol.iterator`      | Make objects iterable (`for..of`) |
| `Symbol.toStringTag`   | Custom object type string         |
| `Symbol.hasInstance`   | Customize `instanceof`            |
| `Symbol.asyncIterator` | Async iteration                   |
| `Symbol.toPrimitive`   | Custom primitive conversion       |

Example:

### Customizing toString()

```js
let obj = {
  [Symbol.toStringTag]: "SurajObject"
};

console.log(obj.toString()); // [object SurajObject]
```

---

# 🔍 Symbol vs String as Object Keys

| Feature            | String keys | Symbol keys              |
| ------------------ | ----------- | ------------------------ |
| Unique?            | ❌ no        | ✔ yes                    |
| Hidden?            | ❌ no        | ✔ yes                    |
| JSON safe?         | ✔ included  | ❌ ignored                |
| Used by JS engine? | no          | many internal operations |
| Collisions?        | common      | impossible               |

---

# 🧠 Boolean & Type of Symbol

```js
typeof Symbol(); // "symbol"
Boolean(Symbol()); // true
```

Symbols are **truthy**.

---

# 🧨 Symbol cannot be used with arithmetic

These will throw errors:

```js
Symbol("x") + 1
Symbol("x") * 2
```

Symbols are *not* numbers or strings—they are identifiers.

---

# 🔥 Summary (Easy to Remember)

* `Symbol` = **unique, immutable identifier**
* Each symbol is **different**, even with same description
* Mainly used as **object keys without collision**
* Symbol properties are **hidden**, not enumerable
* Cannot be converted to string automatically
* Has many **advanced built-in symbols** (`Symbol.iterator`, etc.)
* Used heavily internally in JavaScript engines




 * 
 */