import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Rover from "../../models/rover";
import "./Home.css";

export default function Home() {
  const [route, setRoute] = useState("");
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState("");

  const isButtonDisabled = route.length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const rover = new Rover();
      rover.execute(route);
      setRobot(rover);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <header>
        <h1>
          Hello! <br />
          I'm Mars Rover!
        </h1>
        <img src="../../../mars.png" alt="mars" />
      </header>
      <section>
        <h2>Where are we going?*</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(event) => {
              setRoute(event.target.value);
            }}
            value={route}
            placeholder="Write the route..."
          ></input>
          <Button disabled={isButtonDisabled}>Go!</Button>
        </form>

        <p>
          *Please, bear in mind that in order to move the rover you only can
          use: <br />F to move forward, L to rotate left and R to rotate right.
        </p>
       <h3 className="error">{error}</h3> 
        <h2>Let's follow the route:</h2>
        {robot && (
          <ul>
            {robot.travelLog.map((log, index) => {
              return (
                <li key={index}>
                 ( {log.x}, {log.y} )
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
