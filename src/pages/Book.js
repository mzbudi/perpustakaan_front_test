import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const Book = props => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("didMount");
  });

  const handlePlus = () => {
    setTotal(total + 1);
  };

  function handleMinus() {
    setTotal(total - 1);
  }

  return (
    <div>
      <Button
        onClick={() => {
          handlePlus();
        }}
      >
        +
      </Button>
      <p>{total}</p>
      <Button
        onClick={() => {
          handleMinus();
        }}
      >
        -
      </Button>
    </div>
  );
};

export default Book;
