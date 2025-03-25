import './App.css';
import { useState } from 'react';

function App() {
    const [red, setRed] = useState(false);
    const [yellow, setYellow] = useState(false);
    const [green, setGreen] = useState(false);

    return (
        <div id="Container">
            <h1><center>TRAFFIC SIGNALS</center></h1>
            <div id="light">
                <div className={red ? "circle red" : "circle white"}></div>
                <div className={yellow ? "circle yellow" : "circle white"}></div>
                <div className={green ? "circle green" : "circle white"}></div>
            </div>
            <div id="button">
                <div 
                    className="btnred" 
                    onClick={() => { setRed(true); setYellow(false); setGreen(false); }}>
                    RED
                </div>
                <div 
                    className="btnyellow" 
                    onClick={() => { setRed(false); setYellow(true); setGreen(false); }}>
                    YELLOW
                </div>
                <div 
                    className="btngreen" 
                    onClick={() => { setRed(false); setYellow(false); setGreen(true); }}>
                    GREEN
                </div>
            </div>
        </div>
    );
}

export default App;