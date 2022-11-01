import React from "react";

function Usersview(props){
    return(
        <div>
            <p>Imię: {props.name}, Nazwisko: {props.lastName}</p>
        </div>
    );
}

export default Usersview;