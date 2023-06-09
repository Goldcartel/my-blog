import React from "react";
import Practice from "./Practice";

const array = [
    {
        id:1,
        name:"손흥민",
        team:"토트넘",
        logo:"tot.png",
    },
    {
        id:2,
        name:"김민재",
        team:"나폴리",
        logo:"nap.png",
    },
    {
        id:3,
        name:"황희찬",
        team:"울버햄튼",
        logo:"wol.png",
    },
];

function TestList() {
    return(
        <div>
            {
                array.map((arr)=><Practice key={arr.id} name={arr.name} team ={arr.team} logo={arr.logo}/>)
            }
        </div>
    )
}

export default TestList;