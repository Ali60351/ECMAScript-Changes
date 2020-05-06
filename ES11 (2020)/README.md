# ECMA 2020 (ES11)

## Private Class Variables

```js
class Message {
    #message = "Howdy"

    greet() { console.log(this.#message) }
}

const greeting = new Message()

greeting.greet() // Howdy
console.log(greeting.#message) // Private name #message is not defined
```

## BigInt

- Created to preserve precision for numbers larger than `2^53 - 1`

```js
console.log(typeof BigInt(123))
// bigint

console.log(typeof 123n)
// bigint

console.log(0n == 0)
// true

console.log(0n === 0)
// false
```

## Promise.allSettled

- Similar to `Promise.all` somewhat
  - Does not reject if a promise fails
  - Has a different return value

```js
const p1 = new Promise((res, rej) => setTimeout(rej(123), 1000));

const p2 = new Promise((res, rej) => setTimeout(res(456), 1000));

Promise.all([p1, p2]).then(
    data => console.log(data)
).catch(
    err => console.log(err)
);

// 123
```

```js
const p1 = new Promise((res, rej) => setTimeout(res(123), 1000));

const p2 = new Promise((res, rej) => setTimeout(res(456), 1000));

Promise.all([p1, p2]).then(
    data => console.log(data)
).catch(
    err => console.log(err)
);

// [ '123', 456' ]
```

```js
const p1 = new Promise((res, rej) => setTimeout(res(123), 1000));

const p2 = new Promise((res, rej) => setTimeout(rej(456), 1000));

Promise.allSettled([p1, p2]).then(data => console.log(data));

// [
//   Object { status: "fulfilled", value: 123},
//   Object { status: "rejected", reason: 456}
// ]
```

## Nullish Coalescing Operator

```js
const person = {
    name: '',
    age: 0
}

console.log(person.name || "Anonymous"); // "Anonymous"
console.log(person.age || 18); // 18

console.log(person.name ?? "Anonymous"); // ""
console.log(person.age ?? 18); // 0
```

- Notice how `''` and `0` actually equate to false if converted to boolean but we avoid getting it replaced here

## Optional Chaining Operator

```js
const person = {

};

console.log(person.profile);
// undefined

console.log(person?.profile?.name);
// undefined

console.log(person.profile.name);
// TypeError: person.profile is undefined
```

## Dynamic Import

```js
const math = await import('./math.js');
console.log(math.add(5, 10));
```

## String.matchAll

```js
const numberRegex = /\d/g;
const numberString = '12345';

console.log(numberString.match(numberRegex));
// [ 1 ]

console.log(Array.from(numberString.matchAll(numberRegex)));
/*
[
    [ 1 ],
    [ 2 ],
    [ 3 ],
    [ 4 ],
    [ 5 ],
]
*/
```
