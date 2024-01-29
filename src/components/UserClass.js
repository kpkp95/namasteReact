import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log("child  constructor" + " " + this.props.name);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "no avatoar",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kpkp95");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
    //console.log("child  did mount" + " " + this.props.name);
  }

  render() {
    const { phone, num } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    //console.log("child  render" + " " + name);
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <img className="logo" src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
