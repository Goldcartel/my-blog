import React from "react";
import Card from "./Card";

const cards = [
    {
        name: " 도지",
        explain: "일론머스크, 시바견",
        logo: "dogi.png",
    },
    {
        name: "이더리움",
        explain: "가스비, 오픈씨",
        logo: "ether.png",
    },
    {
        name: "비트코인",
        explain: "대장주, 가상화폐",
        logo: "bit.jpg",
    },
];

function CardList() {
    return (
        <div>
            {cards.map((card)=>{
                return (
                    <Card name={card.name} explain = {card.explain} logo={card.logo}/>
                )
            })}
        </div>
    )

}

export default CardList;