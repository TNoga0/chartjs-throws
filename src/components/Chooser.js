import React, {useState} from "react";
import "../App.css";
import Plot from "./Plot";

function Chooser() {

  const [angle, updateAngle] = useState(0);
  const [speed, updateSpeed] = useState(0);

  return (
    <div className="Chooser">
      <div className="div-content col-md-4">
        <div className="form-group">
          <label htmlFor="angle">Throw angle in deg (counter-clockwise from the ground level):</label>
          <div className="div-content col-md-3">
          <input type="number" className="form-control" id="angle" name="angle"
                 min="0" max="90" defaultValue="0"
                 onChange={(evt) => updateAngle(Number(evt.target.value))}
          />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="force">Initial speed (in m/s):</label>
          <div className="div-content col-md-3">
            <input type="number" className="form-control" id="force" name="force"
                   min="0" defaultValue="0"
                   onChange={(evt) => updateSpeed(Number(evt.target.value))}
            />
          </div>
        </div>
      </div>
      <div className="div-content col-md-8">
        <Plot angle={angle} speed={speed} />
      </div>
    </div>
  );
}

export default Chooser;
