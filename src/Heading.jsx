import React from "react";

function Heading() {
  const time = new Date().getHours();
  let words = "";
  let colour = {
    color: "red"
  };

  if (time < 12) {
    colour.color = "red";
    words = "Good Morning";
  } else if (time > 12 && time < 18) {
    colour.color = "green";
    words = "Good Afternoon";
  } else {
    colour.color = "blue";
    words = "Good Evening";
  }
  return (
    <h1 className="heading" style={colour}>
      {words}
    </h1>
  );
}

export default Heading;
