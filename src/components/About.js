import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent did mount");
  }

  render() {
    //  console.log("Parentrender");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React </h2>

        <UserClass name="Kunal" location="Kol" phone="678-978-7878" num="1" />
      </div>
    );
  }
}

export default About;
