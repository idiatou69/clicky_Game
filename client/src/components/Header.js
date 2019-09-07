import React from "react";
import "../styles/Header.css";


const styles = {
  headerStyle: {
    background: "blueviolet",
    marging: "auto",
   paddingTop:15

  },
  headingStyle: {
    fontSize: 30,
    background: "blueviolet",
    TextAlign: "top",
    marging: 15
  }
};

// We use JSX curly braces to evaluate the style object

function Header(props) {
  return (
    <div class="container">
      <header style={styles.headerStyle} className="header">
        <div class="row">
          <div class="col-sm-4">

            <h3 style={styles.headingStyle}>clicky Game</h3>
          </div>
          <div class="col-sm-4">
             <h3>score: {props.score}  </h3>
          </div>
          <div class="col-sm-4">
            <h3>top score:  {props.topScore}</h3>

          </div>

        </div>
      </header>
      </div>
    );
}
export default Header;