import React from "react";
import "../styles/Header.css";


const styles = {
  headerStyle: {
    background: "red",
    marging:15
    
  },
  headingStyle: {
    fontSize: 30,
    background: "red"
  }
};

// We use JSX curly braces to evaluate the style object

function Header(props) {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>clicky Game</h1>
      <h3>score: {props.score}  </h3>
      <h3>top score:  {props.topScore}</h3>
    </header>
  );
}

export default Header;
