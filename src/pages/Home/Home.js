import React, { useState } from "react";
import Button from "../../components/Button/Button";

import "./Home.css";

export default function Home() {
  const [route, setRoute] = useState("");

  const isButtonDisabled = route.length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(route);
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
          use: <br />F to move forward, L to move left and R to move right.
        </p>
        <h2>Let's follow the route:</h2>
        <ul>
          <li>{route}</li>
        </ul>
      </section>
    </div>
  );
}
