import { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY);
    }, [count]);

    return(
        <div style={{padding:16}}>
            <p>{`현재 총 인원 수:${count}`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull&&<p style={{color:"red"}}>꽉 찼습니다.</p>}
        </div>
    )
}

export default Accommodate;