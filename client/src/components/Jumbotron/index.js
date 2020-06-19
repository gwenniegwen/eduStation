import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ 
      color:"white",
      borderColor:"1px, solid, yellow",
      fontFamily: 'Architects Daughter, cursive',
      height: 200, 
      clear: "both",  
      textAlign: "center",
      marginTop:"20px"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
