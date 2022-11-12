import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;
console.log(process.env);
function Formapi(){
    const [ iddata, setData ] = useState([]);
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
        const responseData = await response.json();
        
        const data = [];
        console.log(responseData)
        responseData.records.forEach((elem) => {
            data.push({
                id: elem.id,
                name: elem.fields.name
            })
        })
        setData(data);
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
            {iddata.map && iddata.map((user) => {
                return <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            })}

            
            </div>
    )
}

export default Formapi;