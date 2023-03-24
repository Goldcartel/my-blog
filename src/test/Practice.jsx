import React, { useEffect } from "react";
import { useState } from "react";

const styles = {
    wrapper: {
        margin:8,
        padding:8,
        display:"flex",
        flexDirection: "row",
        border:"1px solid black",
        borderRadius: 16,
    },

    img: {
        width:60,
        height:60,
        borderRadius:25,
        marginTop:"auto",
        marginBottom:"auto",
        padding:"0.8rem",
    },

    textForm:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    nameTextForm: {
        fontSize:25,
        fontWeight: "bold",
    },

    teamFrom: {
        fontSize:16,
    },

    like:{
        width:50,
        height:50,
    },

    lastForm:{
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        marginTop:"auto",
        marginBottom:"auto",
    }
}
const MAX_CAPACITY = 10

function Test(props) {
    const [count, setCount] = useState(0);
    const [isFull, setIsFull] = useState(false);
    const increaseCount =()=> setCount((count) => count+1);
    const decreaseCount =()=> setCount((count) => Math.max(count-1, 0));
    useEffect(()=>{
        setIsFull(count>=MAX_CAPACITY);
    },[count])

    return(
        <div style={styles.wrapper}>
            <img style={styles.img} src={`img/${props.logo}`}/>
            <div style={styles.textForm}>
                <h1 style={styles.nameTextForm}>{props.name}</h1>
                <h2 style={styles.teamFrom}>{props.team}</h2>
            </div>
            <div style={styles.lastForm}>
                <img style={styles.like} src="img/like.png" onClick={increaseCount}/>
                <p>{count}</p>
                <img style={styles.like} src="img/dislike.png" onClick={decreaseCount}/>
                {isFull && <p style={{color:"red"}}>초과</p>}
            </div>
        </div>
    )
}

export default Test;