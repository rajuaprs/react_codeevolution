import React from "react";
const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hwllo Hello Rajkumar</h1>
  //     </div>
  //   );

  //return React.createElement("div", null, "Hello Rajkumar");
  //return React.createElement("div", null, "h1", "Hello Rajkumar");
  return React.createElement(
    "div",
    { id: "test", className: "dummytest" },
    //React.createElement("h1", "null", "Hello Rajkumar")
    React.createElement("h1", "null", "Hello Rajkumar")
  );
};

export default Hello;
