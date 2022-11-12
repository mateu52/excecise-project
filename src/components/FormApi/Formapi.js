import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;
console.log(process.env);
function Formapi(){
    const [ data, setData ] = useState([]);
    console.log(process.env);

    const fetchIdents = async () => {

        const baseUrl = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;
        const apiConfig = {
            identList: `${baseUrl}/identable`,
            idenDetail: `${baseUrl}/identable`
        }
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${REACT_APP_API_KEY}`
            }
        }
        const response = await fetch(apiConfig.identList, requestConfig);
        const datab = await response.json();
        console.log(datab)
    }
    useEffect(()=> {
            fetchIdents();
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
            {data.map && data.map((user) => {
                <div key={user.id}>
                    <p>{user.fields.name}</p>
                </div>
            })}

            
            </div>
    )
}

export default Formapi;