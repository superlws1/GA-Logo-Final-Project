import {useState} from 'react';

const Counter = () => {

    // let number = 10;
    let [number,setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter(++number)
        // number++;
        console.log(number)
    }
    const handleDecrease = () => {
        setCounter(--number)
        // number--;
    }

    return (
    <div>
        <h1>Counter Component</h1>
        <button onClick={handleIncrease}>Increase</button>
        <p>{number}</p>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
    )
        

}

export default Counter