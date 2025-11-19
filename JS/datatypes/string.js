/*
Here is the **deep, clear, complete explanation of the JavaScript `String` datatype**, written in the same detailed style as Number and BigInt.

---

# 🔥 **What is a String in JavaScript?**

A **String** is a **primitive datatype** used to represent **text**.

Examples of strings:

```js
"Suraj"
'JavaScript'
`Hello`
```

A string is a sequence of **Unicode characters**, meaning it can store:

* Letters
* Digits
* Special symbols
* Emojis
* Characters from ANY language (Hindi, Chinese, Arabic, etc.)

Example:

```js
let s = "नमस्ते 👋";
```

---

# ⚙️ **How Strings are stored (important)**

Strings are:

* **Immutable** → cannot be changed once created
* Stored as a list of **UTF-16 code units**
* Indexed like arrays (0-based)
* But **not** arrays

Example:

```js
let name = "Suraj";
console.log(name[0]); // S
console.log(name[4]); // j
```

---

# 🔒 **Strings are Immutable (very important)**

This means:

```js
let s = "Hello";
s[0] = "B";  
console.log(s);  
// Hello  (no change)
```

If you modify a string, JavaScript creates a **new string** in memory.

Example:

```js
let s = "Hello";
s = s + " World";  // new string created
```

Why immutability?

* Faster internal optimization
* Safe to use in multiple references
* Memory-efficient for repeated usage

---

# 🔥 **Ways to create strings**

### 1️⃣ Using double quotes

```js
let a = "Hello";
```

### 2️⃣ Using single quotes

```js
let b = 'World';
```

### 3️⃣ Using backticks (Template Literal)

```js
let c = `Hello World`;
```

### 4️⃣ Using String() constructor (not recommended)

```js
let d = String(123); // "123"
```

### 5️⃣ Using new String() (creates object, rarely needed)

```js
let obj = new String("hello");
typeof obj // object
```

---

# ⭐ **Template Literals (most important feature)**

Introduced in ES6.

Allows:

### ✔ Multiline strings

### ✔ String interpolation (`${}`)

### ✔ Embedding expressions

Example:

```js
let name = "Suraj";
let msg = `Hello ${name}, welcome to JS!`;
```

Multiline:

```js
let poem = `
Roses are red,
Violets are blue,
JS is awesome,
And so are you!
`;
```

---

# 🔍 **String Length**

```js
let s = "Hello";
console.log(s.length);  // 5
```

Each UTF-16 code unit counts as 1.

---

# 📌 **Common String Methods (very important)**

### 🔹 Accessing characters

```js
str.charAt(2);
str[2];
```

### 🔹 Changing case

```js
str.toUpperCase();
str.toLowerCase();
```

### 🔹 Searching

```js
str.indexOf("a");
str.lastIndexOf("a");
str.includes("suraj");
str.startsWith("He");
str.endsWith("lo");
```

### 🔹 Extracting

```js
str.slice(0, 5);
str.substring(1, 4);
str.substr(1, 2); // legacy
```

### 🔹 Replacing

```js
str.replace("a", "A");
str.replaceAll("a", "A");
```

### 🔹 Splitting

```js
"apple,banana,grape".split(",");
```

### 🔹 Trimming spaces

```js
str.trim();
str.trimStart();
str.trimEnd();
```

### 🔹 Repeating

```js
"ha".repeat(3); // "hahaha"
```

### 🔹 Converting to number

```js
Number("123");
parseInt("100px"); // 100
```

---

# 🔥 **Escape Characters**

Used inside quotes:

```js
let s = "He said \"Hello\"";
let n = "Line1\nLine2";
let t = "Tab\tHere";
```

Common escapes:

| Escape | Meaning      |
| ------ | ------------ |
| `\n`   | newline      |
| `\t`   | tab          |
| `\"`   | double quote |
| `\'`   | single quote |
| `\\`   | backslash    |

---

# 🌍 **Strings and Unicode**

JavaScript strings support full Unicode.

Examples:

```js
let hindi = "नमस्ते";
let emoji = "🔥✨😁";
```

But some characters (like emojis) take **2 UTF-16 units**, so `.length` may be bigger.

---

# ⭐ Important: String vs String Object

```js
let a = "hello";       // primitive
let b = new String("hello"); // object
```

Difference:

| Property | "hello" | new String("hello") |
| -------- | ------- | ------------------- |
| Type     | string  | object              |
| Faster   | ✔       | ❌ slower            |
| Memory   | less    | more                |

Always use **primitive string**, never the object.

---

# 🔥 Summary (Easy To Remember)

1. **String = text**
2. **Primitive + immutable**
3. Stored in **UTF-16**
4. Created using `" "` `' '` or `` ` ` ``
5. Template literals allow **multiline** + **${expression}**
6. Strings behave like arrays but **are not arrays**
7. Hundreds of helpful string methods
8. Emojis count as 2 units
9. `"hello"` ≠ `new String("hello")`

 




*/