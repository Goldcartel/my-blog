import React from "react";
import { useState } from "react";

const styles = {
    wrapper: {
        border:"1px solid red",
        backgroundColor:"cyan",
        textAlign:"center",
        borderRadius:100,

    },
}

function Timer() {
    const [timer, setTimer] = useState("00:00:00");
    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        setTimer(`${hours}:${minutes}:${seconds}`)
    }

    const startTimer = () =>{
        setInterval(currentTimer, 1000)
    }

    startTimer()

    return (
        <div style={styles.wrapper}>
            <h1>안녕</h1>
            <h1>{timer}</h1>
        </div>
    )
}

export default Timer;