# ECMA 2018 (ES9)

## Async Iteration

```js
const Storage = {
    data: [1, 2, 3, 4, 5],
    [Symbol.asyncIterator]() {
        let index = 0;
        return {
            next () {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({
                            done: index === Storage.data.length,
                            value: Storage.data[index++]
                        });
                    }, 1000);
                })
            }
        }
    }
};

const asyncMain = async () => {
    for await (let n of Storage) {
        console.log(n)
    }
}

asyncMain();
```

## `...` for Objects

- Spread for Objects
- Rest for Objects

## Regex Improvements

- `/s` Dotall flag to match newlines
- Named Groups
- Unicode Escape Properties
  - [Proposal](https://github.com/tc39/proposal-regexp-unicode-property-escapes#ecmascript-proposal-unicode-property-escapes-in-regular-expressions)

```js
const sentence = 'A ticket to 大阪 costs ¥2000 👌.';

const regexpEmojiPresentation = /\p{Emoji_Presentation}/u;

console.log(sentence.match(regexpEmojiPresentation));
// ["👌"]
```

- Look behind `(?<=y)x`
- Negative Look behind `(?<!y)x`
  - The look behind group itself is not part of the match

## Template Literal Revision

- Allow passing of strings which would normally throw syntax error. Such as `C:\xxx` or `\ubuntu`;
- Using them normally like below will raise error

```js
const x = `\ubuntu`;
// SyntaxError: malformed Unicode character escape sequence
```

## Promise .finally
