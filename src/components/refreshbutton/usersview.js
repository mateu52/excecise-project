import React from "react";

function Usersview(dane){
    console.log(dane.dane);
    return(
        <div>
            <p>Lista: </p>
            {dane.dane && dane.dane.map((user) => {
                return <p>{user.name.first }, {user.name.last }</p>
            })}
            
        </div>
    );
}

export default Usersview;