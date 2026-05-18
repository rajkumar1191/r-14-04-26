import React from "react";
import "./Profile.css";

const Child = ({ onSave }) => {
  console.log("Child component rendered");
  return (
    <div className="profile">
      <button className="button" onClick={onSave}>
        Save
      </button>
    </div>
  );
};

export default React.memo(Child);
