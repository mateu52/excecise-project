import React, { useState } from "react";
import Usersview from "./usersview";

function Btn(){
    const [ users, setUsers ] = useState();

    const hRefresh = () => {
        fetch('https://randomuser.me/api/?format=json&results=10')
        .then((res) => res.json())
        .then((data) => setUsers(data.results));
    }
    

    return(
        <>
        <button onClick={hRefresh}> Kliknmij aby odświeżyć</button>
        <Usersview dane={users} />
        </>
    )
}
export default Btn;