import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { fetchApi2 } from "./fetchApi";

function Details(){
    const [ iddata, setData ] = useState([]);

    const fetchData = async () => {
        const data = await fetchApi2();
        setData(data);
    }

    useEffect(() => {
            fetchData();
    },[])
    console.log(iddata)
    return(
        <div>
            <nav>
                <ul>
                     <li>
                         <Link to="/Idtable">Imiona</Link>
                     </li>
                     <li>
                        <Link to="/Details">Miasta</Link>
                    </li>
                </ul>
            </nav>
            {iddata.map && iddata.map((user) => {
                return <div key={user.id}>
                    <p>{user.city}</p>
                </div>
            })}
        </div>
    )
}

export default Details;