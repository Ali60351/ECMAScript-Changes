# ECMA 2015 (ES6)

## Introduction of `Let` and `Const`

```js
const x = {a: 123};
let y = 321;

x.a = y; // NO ERROR
```

- `Const` only prevents reassignment of variable. Modification is possible.
- `Let` and `Const` are block scoped whereas `var` is function scoped. This change was made for function scopes too.

## Arrow Functions

```js
const evenNumbers = [1, 2 ,3].filter(n => n % 2 === 0) // [2]
```

- Share the `this` lexical as same as the surrounding code.

## Default Parameter Values

```js
const dummy = (x=1, y=2) => {
    console.log(x, y)
};

dummy(); // 1 2
```

## Rest Operator

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3, 4, 5]
```

## Spread Operator

```js
const arr = [1, 2];
const newArr = [...arr, 3, 4, 5];

console.log(newArr); // [1, 2, 3, 4, 5]

const dummy = (x, y) => {
    console.log(x, y); // 1 2
}

dummy(...arr);
```

## String Interpolation

```js
const name = 'John Doe';
console.log(`Name: ${name}`); // Name: John Doe
```

## Template Literals

```js
const printCountType = (strings, count) => {
    console.log(`${strings[0]}${count % 2 === 0 ? 'even' : 'odd'}${strings[1]}`);
}

const list = [1, 2, 3];

printCountType`List has ${list.length} items`; // List has odd items
```

```js
const dummy = (strings) => {
    console.log(strings[0] === 'Dummy String \t'); // true
    console.log(strings.raw[0] === 'Dummy String \\t'); // true
}

dummy`Dummy String \t`;
```

## Number Base Literals

```js
const octal = 0o10;
console.log(octal); // 8

const binary = 0b1000;
console.log(binary); // 8
```

- Before ES6 only hex was possible to assign using this pattern.

```js
const hex = 0xf;
console.log(hex); // 15
```

## Extended Unicode Support

```js
// Support of unicode beyond 16 bits
console.log('\u{20BB7}'); // "𠮷"

// New /u flag in regex to match unicode characters
console.log("𠮷".match(/./u)[0]); // 𠮷

// Support to fetch unicode number from string
console.log("𠮷".codePointAt(0) === 0x20BB7) // true
```

```js
const encoded = '🤔';

console.log(encoded === '\u{1F914}') // true

console.log(encoded.charCodeAt(0).toString(16)); // d83e

console.log(encoded.charCodeAt(1).toString(16)); // dd14

console.log(encoded === '\ud83e\udd14'); // true
```

## Sticky Flag for Regex

```js
re = /\d/y; // /y is the sticky flag

while (r = re.exec("456 789")) {
    console.log(`Match: ${r[0]}, LastIndex: ${re.lastIndex}`);
}

// Match: 4, LastIndex: 1
// Match: 5, LastIndex: 2
// Match: 6, LastIndex: 3
```

## Enchaned Object Properties

```js
const x = 'abc';

const obj = {
    x, // Property Shorthand

    [x]: '123', // Computed Property

    dummy (a) { // Function Property
        console.log(a);
    }
};
```

## Destructuring

```js
const obj = { a: 1 };
const { a, b = 2 } = obj; // Default Value for 'b'
```

## Imports

- Wildcard imports
- Default Imports
- Desctructuring Imports

## Class Definations

- super keyword
- class defination
- class inheritance
- static methods
- getter / setters

## Symbol Type

```js
const key = Symbol('foo'); // Declare Symbol

console.log(typeof key === "symbol"); // true

const obj = {};

obj[key] = '123'; // Using Symbol

JSON.stringify(obj) // {}

Object.keys(obj) // []

Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ Symbol(foo) ]

console.log(obj[key]); // 123

/* ==== GLOBAL SYMBOLS ==== */

Symbol.for('bar') // Get or Create global symbol

const globalKey = Symbol.for('bar');

obj[globalKey] = '321';

console.log(obj[globalKey]); // 321
console.log(obj[Symbol.for('bar')]); // 321

console.log(Symbol.keyFor(globalKey)) // "bar"
```

## Iterator & For-Of Operator

```js
let Storage = {
    data: [1, 2, 3, 4, 5],
};

for (let n of Storage) { // Error: Storage is not iterable
    console.log(n)
}
```

```js
let Storage = {
    data: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let index = 0;
        return {
           next () {
               return {
                   done: index === Storage.data.length,
                   value: Storage.data[index++]
                };
           }
        }
    }
};

Storage.data.push(6);

for (let n of Storage) {
    console.log(n)
}

// 1
// 2
// 3
// 4
// 5
// 6
```

## Generator

```js
let Storage = {
    data: [1, 2, 3, 4, 5],
    *[Symbol.iterator]() {
        for (let i = 0; i < Storage.data.length; i++) {
            yield Storage.data[i];
        }
    }
};

Storage.data.push(6);

for (let n of Storage) {
    console.log(n)
}

// 1
// 2
// 3
// 4
// 5
// 6
```

```js
function* evenNumbers(limit=20) {
    let number = 0;

    for(;;) {
        if (number >= limit) {
            break;
        }

        yield number;
        number += 2;
    }
}

for (let i of evenNumbers(10)) {
    console.log(i)
}

const evenList = [...evenNumbers(15)];
console.log(evenList); // [ 0, 2, 4, 6, 8, 10, 12, 14 ]

// 0
// 2
// 4
// 6
// 8
```

- Generation methods can also be used as object properties

## Promises

- Promise `resolve`, `reject`, `then` and `catch`
- `Promise.all`

## New Data Structures

- Set
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- WeakSet
  - Can only contain objects
  - Not enumerable
  - Weak references
- WeakMap
  - Same differences as WeakSet

## Types Data Array

- [Typed Arrays MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

## New Built-In Methods

- `Object.assign`
- `.find` and `.findIndex` or Arrays
- for strings
  - `.repeat`
  - `.startsWith`
  - `.endsWith`
  - `.includes`

- `Number.isNaN` and `Number.isFinite`
- [Number.isSafeInteger MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)
- `Number.EPSILON`
- `Math.trunc`
- `Math.sign`

## Proxy

```js
const source = {
    a: 123,
};

const handler = {
  get: (obj, prop) => prop in obj ? obj[prop] : 'not found'
};

const p = new Proxy(source, handler);

console.log(p.a);
// 123

console.log(p.b);
// not found

p.c = '321';

console.log(source.c);
// 321
```

- Proxies can be easily used for validations

## Reflect.ownKeys()

- Can be used to see all accessible properties

```js
const object1 = {
  property1: 42,
  property2: 13
};

const array1 = [];

console.log(Reflect.ownKeys(object1));
// ["property1", "property2"]

console.log(Reflect.ownKeys(array1));
// ["length"]

```

- Is capable for showing symbols too

## INTL Functions

- `Intl.Collator(region)` to compare characters for sorting etc
- `Intl.NumberFormat(region)`
  - can also be used for currency formatting

    ```js
    const l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

    console.log(l10nUSD.format(100200300.40));
    // "$100,200,300.40"
    ```

- `Intl.DateTimeFormat(region)`
