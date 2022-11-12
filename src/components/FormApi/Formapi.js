import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { fetchApi } from "./fetchApi";

function Formapi(){
    const [ iddata, setData ] = useState([]);

    const fetchData = async () => {
        const data = await fetchApi();
        setData(data);
    }

    useEffect(()=> {
            fetchData();
    },[])
    
    return(
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Idtable">Id table</Link>
                        </li>
                        <li>
                            <Link to="/Details">details</Link>
                        </li>
                    </ul>
                </nav>
            {iddata.map && iddata.map((user) => {
                return <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            })}

            
            </div>
    )
}

export default Formapi;