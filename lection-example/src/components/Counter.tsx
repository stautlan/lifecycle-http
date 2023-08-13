import {  useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    useEffect(() => {
        setTimeout(() => {
            setTime((t) => t + 1);
        }, 1000);
    }, [count])

  return (
    <>
        <div>Count: {count}</div>
        <button onClick={() => setCount((c) => c+1)}>+</button>
        <p>Calculation: {calculation}</p>
        <p>Timer: {time}</p>
    </>
  )
}

export default Counter