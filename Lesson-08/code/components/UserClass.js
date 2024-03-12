import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-coomponent-class">
        <h3>Count: {count}</h3>
        <h3>Count 2: {count2} </h3>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
      </div>
    );
  }
}

export default User;
