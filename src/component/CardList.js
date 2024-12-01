import React from "react";
import Card from "./Card";

const CardList = ({characters})=>{
    const CardArray= characters.map((character) => (
        <Card key={character.id} id={character.id} name={character.name} power={character.power} image={character.image} />
    ))
    return(
        <div>
        {CardArray}
        </div>
    )
}

export default CardList;