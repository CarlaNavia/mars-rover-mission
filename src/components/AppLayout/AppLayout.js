import PropTypes from "prop-types";
import "./AppLayout.css";
import React, { useState } from "react";
import Mode from "../../components/Mode/Mode";

export default function AppLayout({ children }) {
  const [theme, setTheme] = useState("light");

  const handleModeClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={`app-layout ${theme}`}>
      <main>
        <Mode onClick={handleModeClick} theme={theme} />
        {children}
      </main>
    </div>
  );
}
AppLayout.propTypes = {
  children: PropTypes.node,
};
