import React, { useEffect, useState } from "react";
import Usersview from "./usersview";

function Fetchusers(){
    const [ users, setUsers ] = useState();

    useEffect(() => {
        fetch('https://randomuser.me/api/?format=json&results=10')
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
    },[])
    return(
        <>
        <Usersview dane={users} />
        <p>fsdf</p>
        </>
    )
}
export default Fetchusers;