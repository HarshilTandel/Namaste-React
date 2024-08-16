import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h2>Hi, I Am About Us</h2>
      <User name={"Harshil Tandel f."} />
      <UserClass name={"Harshil Tandel c."} location={"Navsari"} />
    </div>
  );
}

export default About;
