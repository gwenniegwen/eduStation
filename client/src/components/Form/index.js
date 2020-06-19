import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="8" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ 
      background: props.comment ? "#1daafc" : "#f5ba13",
      color: props.comment ?  "white" : "black",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
      outline: "none",
      marginBottom: 10 }} className="btn ">
      {props.children}
    </button>
  );
}



  

