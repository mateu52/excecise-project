import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Details(){

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
            <p>hello</p>
        </div>
    )
}

export default Details;