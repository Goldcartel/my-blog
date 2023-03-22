import React from "react";

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

    cardform: {
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    text: {
        color: "black",
        fontsize: "16px",
        fontWeight: "bold",
    },
}


function Card(props) {
    return (
        <div style={styles.wrapper}>
            <div>
                <img style={styles.img} src={`img/${props.logo}`}/>
            </div>
            <div style={styles.cardform}>
                <span style={styles.text}>{props.name}</span>
                <span>{props.explain}</span>
            </div>
        </div>
    )
}

export default Card;