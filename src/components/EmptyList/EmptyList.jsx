import React from "react";

function EmptyList(props){
    return (
        <div>
            <h2>Whoops, nenhum resultado!</h2>
            <p>Nenhum resultado encontrado para: "{props.inputValue}"</p>
        </div>
    )
}

export default EmptyList;