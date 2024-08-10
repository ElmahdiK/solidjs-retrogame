import { createSignal, createEffect } from "solid-js";

function Counter(props) {
    const [counter, setCounter] = createSignal(props.start);
    console.log('Counter component');

    createEffect(() => {
        console.log(`Execute Effect because value of 'counter' was updated`, counter())
    })
    // setInterval(() => {
    //     setCount(prevCounter => prevCounter + 1)
    // }, 1000)

    return <button onclick={() => setCounter(prevCounter => prevCounter + 1)}>{counter()}</button>
}

export default Counter;