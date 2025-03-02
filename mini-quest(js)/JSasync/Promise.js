const myFirstPromise = new Promise((resolve, reject) => {
    const message = 'Hello, Promise';
    resolve(message);
})

myFirstPromise.then(message => {
    console.log(message);
})