async function waitForMessage() {
    const message = 'Hello, Async/Await!';
    return Promise.resolve(message);
}

waitForMessage().then((message) =>{
    console.log(message);
});

await waitForMessage();