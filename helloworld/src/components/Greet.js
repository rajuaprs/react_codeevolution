import React from "react";

// function Greet() {
//   return <h1>hello Rajkumar.</h1>;
// }

// const Greet = () => <h1>Hello Rajkumar</h1>;

const Greet = props => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} - {props.heroname}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
