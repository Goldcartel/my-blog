import React from "react";
import { useState } from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
        borderRadius: 16,
    },

    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    textForm: {
        marginLeft:8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    
    nameTextForm: {
        fontSize:16,
        fontWeight: "bold",
    },

    explainFrom: {
        fontSize:16,
    },

    arr: {
        padding:"0.8rem",
    },

    lastForm : {
        display:"flex",
        flexDirection:"row",
        marginLeft:"auto",
    },

    like : {
        width:50,
        height:50,
        padding:"0.8rem",
    }
}

function Card(props) {
    const [count, setCount] = useState(0);
    const increaseCount = () => setCount((count) => count+1)
    return (
        <div style={styles.wrapper}>
            <div style={styles.arr}>
                <img style={styles.img} src={`img/${props.logo}`} />
            </div>
            <div>
                <h1 style={styles.nameTextForm}>{props.name}</h1>
                <h2 style={styles.explainFrom}>{props.explain}</h2>
            </div>
            <div style={styles.lastForm}>
                <img style={styles.like} src="img/like.png" onClick={increaseCount}></img>
                <p style={{padding:"0.8rem", marginLeft:"-1.3rem"}}>{count}</p>
            </div>
        </div>
    )
};

export default Card;