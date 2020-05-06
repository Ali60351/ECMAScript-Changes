# ECMA 2017 (ES8)

## New Object Functions

```js
const obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log([...Object.values(obj)]);
//  [1, 2, 3]

console.log([...Object.entries(obj)]);
/*
[
    ['a', 1],
    ['b', 2],
    ['c', 3],
]
*/

Object.values(obj).forEach(value => {
    // ....
});

Object.entries(obj).forEach(([key, value]) => {
    // ....
});
```

## String Padding

```js
const padComment = comment => {
    const spacedComment = ` ${comment} `;

    const targetLength = 120;

    const paddingLeft = (targetLength / 2) + (spacedComment.length / 2) - 3;
    const leftPadded = '/* ' + spacedComment.padStart(paddingLeft, '=');

    const paddingRight = targetLength - 3;
    const rightPadded = leftPadded.padEnd(paddingRight, '=') + ' */';

    return rightPadded;
}

console.log(padComment('LOGIN REDUCER'));
```

```js
/* ================================================= LOGIN REDUCER ================================================== */
```

## Syntax Change

- Allow trailing comma in function parameters

## Atomics

- Support for atomic operation with help of mutex like behaviour
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
