import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorEls = colors.map((color) => {
    return <li key={color} style={{ color: color}}>{color}</li>;
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorEls}
      </ol>
    </div>
  );
}

export default ColorList;
