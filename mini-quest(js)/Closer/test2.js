const messageMaker = (start) => {
    return {
        makeMessage : (end) => {
            console.log(start + end);
    }
}
}

const message = messageMaker("hi, ");
message.makeMessage("I'm daehun");