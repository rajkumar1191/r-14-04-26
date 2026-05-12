import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ onClick }) => {
    const [count, setCount] = useState(0);
  
  console.log("Profile component rendered");
  return (
    <div className="profile">
       <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
      <h2>Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <button className="button" onClick={onClick}>
        Edit Profile
      </button>
    </div>
  );
}
export default Profile;

// export default React.memo(Profile);