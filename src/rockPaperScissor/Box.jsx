import React from 'react'

const Box = (props) => {
    let co = "black";
    props.result === "Win" ? co = "green" : props.result === "Lose"? co ="red": co="black"

    return (
        <div className='box' style={{borderColor:`${co}`, color:`${co}`}}>
            <h1>{props.name}</h1>
            <img
                className='item-img'
                src={props.item && props.item.img} 
                alt='pic'/>
            <h2>{props.result}</h2>
        </div>
    )
}

export default Box;
