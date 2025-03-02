const createCounter = () => {
    let count = 0;

    return {
        increase : () => {
            count++
        }, 
        decrease : () => {
            count--
        },
        getCount : () =>{
            console.log(count)
        }
    };
}

const go = createCounter();
go.increase();
go.getCount();
go.decrease();
go.getCount();