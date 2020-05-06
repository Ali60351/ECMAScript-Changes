# ECMA 2019 (ES10)

## Array.flat

```js
const arr = [
    1, 2, 3,
    [
        4, 5, 6, [
            7, 8, 9
        ]
    ]
];

console.log(arr.flat())
// [1, 2, 3, 4, 5, 6, [7, 8, 9]]
```

## Array.flatMap

```js
const arr = [1, 2, 3, 4, 5];

console.log(arr.flatMap(n => [n]));
// [1, 2, 3, 4, 5]
```

## String.trimStart and String.trimEnd

```js
const paddedString = '  ABC  ';

console.log(paddedString.trimStart());
// 'ABC  '

console.log(paddedString.trimEnd());
// '  ABC'
```

## Optional Catch Parameter

```js
try {

} catch {

}
```

## Object.fromEntries

```js
const obj = {
    a: 1,
    b: 2,
    c: 3
};

const entries = Object.entries(obj);

console.log(entries);
/*
[
    ['a', 1],
    ['b', 2],
    ['c', 3],
]
*/

const newObj = Object.fromEntries(entries);

console.log(newObj);
// { a: 1, b: 2, c: 3 }
```

## Symbol Description Property

```js
const key = Symbol('Description');

console.log(key.description);
// Description
```
