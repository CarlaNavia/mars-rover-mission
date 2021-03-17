import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./Mode.css";

export default function Mode({ onClick, theme }) {
  return (
    <nav>
      <button
        onClick={onClick}
        className={`switch ${theme === "dark" ? "active" : ""}`}
        id="switch"
      >
        <span>
          <FontAwesomeIcon icon={faSun} />
        </span>
        <span>
          <FontAwesomeIcon icon={faMoon} />
        </span>
      </button>
    </nav>
  );
}
