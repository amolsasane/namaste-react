import User from "./UserClass";

const About = () => {
  return (
    <div className="user-component-class">
      <h1>About Us</h1>

      <User name={"Default User"} location={"Pune"} />
    </div>
  );
};

export default About;
