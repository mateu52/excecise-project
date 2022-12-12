import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { fetchApi } from "./fetchApi";

function Idtable(){
    const [ iddata, setData ] = useState([]);

    const fetchData = async () => {
        const data = await fetchApi();
        setData(data);
    }

    useEffect(() => {
        fetchData();
    },[])

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
            {iddata && iddata.map((user) => {
                return <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            })}
        </div>
    )
}

export default Idtable;