import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="pt-10 text-center">
          <h3 className="font-bold text-lg">About Us</h3>
        </div>
        <div className="px-4">
          <h3 className="font-bold">Introduction</h3>
          <p className="pt-2">
            Welcome to the <span className="italic">"FoodPath"</span>{" "}
            application, your go-to destination for seamless food delivery. We
            are dedicated to bringing your favorite meals right to your doorstep
            with speed and convenience.Our mission is to transform your dining
            experience by connecting you with the best restaurants in town
          </p>
          <h3 className="pt-2 font-bold">Our Story</h3>
          <p className="pt-2">
            FoodPath was born out of a love for great food and a desire to make
            it accessible to everyone. Our founder, Sanjeev Ivatury, envisioned
            a platform that bridges the gap between food lovers and their
            favorite restaurants. From humble beginnings, we've grown into a
            dynamic team committed to delivering deliciousness to your door.
          </p>
          <h3 className="pt-2 font-bold">Values and Commitment </h3>
          <p className="pt-2">
            At FoodPath, we believe in more than just delivering food. We are
            committed to sustainability by partnering with eco-friendly
            restaurants and using biodegradable packaging. Our customer-first
            approach ensures that every order is handled with care and
            precision, providing you with an unparalleled dining experience.
          </p>
          <h3 className="pt-6 font-semibold">Developer: Sanjeev Ivatury.</h3>
          <h3 className="font-semibold">Email: saisanjeev97@gmail.com</h3>
          <h3 className="font-semibold">
            This app is developed using React, JavaScript, HTML, Tailwind CSS,
            Redux Toolkit.
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
