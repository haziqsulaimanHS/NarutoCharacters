import React from "react";

const Card = ({name, power, id, image})=>{
    return ( 
        <div className="ba br4 bg-gold b--black dib ma1 pa1 grow pointer">
            <img className="br4" alt="character image" src={image || "https://via.placeholder.com/200x200?text=No+Image"} 
            width={200} height={200}/>
                <div className="tc">
                    <h2>{name}</h2>
                    <p>{power}</p>
                </div>
        </div>
    );
}

export default Card;


