import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Kolkata</h3>
      <h4>Contact: (968)-545-676</h4>
    </div>
  );
};

export default User;
