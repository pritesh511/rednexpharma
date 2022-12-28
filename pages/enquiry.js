import React, { useEffect, useState } from "react";

const Enquiry = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, []);
  return (
    <>
      <h1>Enquiry Page {count}</h1>
    </>
  );
};

export default Enquiry;
