import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Formapi(){
    
    
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
                <h4>
                    Baza Airtable - dwie bazy: Imiona oraz Miasta.
                </h4>
            

            

            
            </div>
    )
}

export default Formapi;