import React, {useState} from "react";
import Chart from 'chart.js';
import "../App.css";

function Plot({angle, speed}) {

  const [plot, setPlot] = useState({});

  var plotting_interval_reference;
  //physics stuff:
  var g = 9.81;
  var t = 0;

  function stopSimulation() {
    /**
     * This method is called after clicking the STOP button. Clears the plotting_interval_reference
     * variable and recalculates the angle to deg (to prevent from doubling the rad conversion).
     */
    angle = angle * 180 / Math.PI;
    clearInterval(plotting_interval_reference);
  }

  function calculate_points(time) {
    /**
     * This function calculates the next X and Y for the chart trajectory and
     * updates plot's arrays.
     */
    plot.data.datasets[0].data.push((speed * time * Math.sin(angle)) - ((g * time * time) / 2));
    plot.data.labels.push((speed * time * Math.cos(angle)).toFixed(2));
    plot.update();
  }

  const startPlotting = (event) => {
    /**
     * This function is called after pressing Throw button - resets the time variable,
     * calculates the rad value of angle, empties the plot's X (labels) and Y (dataset data) arrays
     * and invokes the setInterval method which sets up plotting function.
     */
    t = 0;
    event.preventDefault();
    angle = angle / 180 * Math.PI;
    plot.data.datasets[0].data = [];
    plot.data.labels = [];
    plotting_interval_reference = setInterval(() => {
      calculate_points(t);
      t = t + 0.1;
    }, 100);
  };

  window.onload = function() {
    /**
     * This method is called when page loads and sets up the chart for canvas.
     */
    setPlot(new Chart(document.getElementById("line-chart"), {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          data: [],
          label: "Throw trajectory curve",
          borderColor: "#000000",
          fill: false
        }]
      },
      options: {
      }
    }));
  };


  return (
    <div className="Plot">
      <form onSubmit={startPlotting}>
        <button type="submit" className="btn btn-outline-dark">Throw!</button>
      </form>
      <br/>
      <button className="btn btn-outline-danger" onClick={stopSimulation}>STOP simulation</button>
      <div className="plot">
        <canvas id="line-chart" width="800" height="450"></canvas>
      </div>
    </div>
  );
}

export default Plot;
