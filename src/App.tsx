import { useState, useEffect } from 'react'
import './App.css'

// External functions
import calcRange from './functions/calcRange';
import clear from './functions/clear';
import handleHeightBtnClick from './functions/handleHeightBtnClick';

function App() {

  // STATE
  const [units, setUnits] = useState(1.8);
  const [mils, setMils] = useState(5);
  const [range, setRange] = useState();

  useEffect(() => {
    calcRange(units, mils, setRange);
  }, [units, mils]);

  // Functions



  // RENDER
  return (
    <>
        <div id="inputsRow">
          <div id="unitsInputWrapper" className="topRowItem">
            <label htmlFor="unitsInput">Height</label>
            <input 
              id="unitsInput" 
              type="number" 
              value={units} 
              min={0} 
              onChange={(e) => setUnits(+e.target.value)}
              onFocus={(e) => e.target.select()}
            />
          </div>

          <div id="milsInputWrapper" className="topRowItem">
            <label htmlFor="milsInput">Mils</label>
            <input 
              id="milsInput"  
              type="number" 
              value={mils} 
              min={0} 
              onChange={(e) => setMils(+e.target.value)} 
              onFocus={(e) => e.target.select()}
            />
          </div>

          <div id="distanceWrapper" className="topRowItem">
            <label htmlFor="result" id="resultLabel">Range</label>
            <input disabled id="result" value={range}/>
          </div>
        </div>
        <button id="clearBtn" onClick={() => clear(setMils, setUnits)}>Clear</button>

        <div id="buttonsWrapper">
          <button onClick={() => handleHeightBtnClick(1.8, setUnits)}>Man</button>
          <button onClick={() => handleHeightBtnClick(1.83, setUnits)}>Humvee</button>
          <button onClick={() => handleHeightBtnClick(2.715, setUnits)}>Ural</button>
          <button onClick={() => handleHeightBtnClick(2.32, setUnits)}>BRDM-2</button>
          <button onClick={() => handleHeightBtnClick(2.95, setUnits)}>Utility Truck</button>
          <button onClick={() => handleHeightBtnClick(5.65, setUnits)}>Mi-8</button>
          <button onClick={() => handleHeightBtnClick(2.31, setUnits)}>BTR-70</button>
          <button onClick={() => handleHeightBtnClick(1.38, setUnits)}>Skoda</button>
          <button onClick={() => handleHeightBtnClick(4.39, setUnits)}>UH-1H</button>
          <button onClick={() => handleHeightBtnClick(2.69, setUnits)}>Lav-25</button>
          <button onClick={() => handleHeightBtnClick(1.9, setUnits)}>Minibus</button>
          <button onClick={() => handleHeightBtnClick(1.8, setUnits)}>Jeep</button>
          <button onClick={() => handleHeightBtnClick(2.01, setUnits)}>UAZ</button>
        </div>

        <div>
          <p className="note">Enter the target's estimated height in meters, then measure its height in mildots.</p>
          <p className="note">One notch on the binoculars is equal to 5 mildots.</p>
          <p id="credit">By RooseveltCat</p>
          <a target="blank" href="http://buymeacoffee.com/rooseveltcat">Buy me a coffee</a>
        </div>
    </>
  )
}

export default App
