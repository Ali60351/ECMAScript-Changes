const p1 = new Promise((res, rej) => setTimeout(rej(123), 1000));

const p2 = new Promise((res, rej) => setTimeout(res(456), 1000));

Promise.all([p1, p2]).then(
    data => console.log(data)
).catch(
    err => console.log(err)
);