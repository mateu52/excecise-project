import React, { useState, useEffect } from "react";
import './style.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <div className="Container stopwatch pt-2 ">
        
        <div className="Row times mb-2 mt-2 btn-outline-primary">
          <div className="Col"><span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span></div>
          <div className="Col"><span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span></div>
          <div className="Col"><span>{("0" + ((time / 10) % 100)).slice(-2)}</span></div>
        </div>

        <div className="Row buttons mb-4 ">
          <div className="Col ms-auto" xl={6}>
            <button type="button" class="btn btn-success" onClick={() => setRunning(true)}>Start</button>
          </div>
          <div className="Col">
            <button type="button" class="btn btn-danger" onClick={() => setRunning(false)}>Stop</button></div>
          <div className="Col me-auto">
            <button type="button" class="btn btn-warning" onClick={() => setTime(0)}>Reset</button> 
          </div>
        </div>
        <p><img src={require("./pngk.png")} alt="" className="watchpng mt-md-4"/></p>
        
      </div>

  
    );
  };

  export default Stopwatch;