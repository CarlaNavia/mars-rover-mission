import PropTypes from "prop-types";
import "./Button.css";

export default function Button({ children, disabled }) {
  return (
    <>
      <button className="button-route" disabled={disabled}>
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
