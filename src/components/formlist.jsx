import { useState, useEffect } from "react";
import styled from "styled-components";

// Define your styled button component
const Buttoninput = styled.button`
    background-color: black;
    color: white;
    cursor:pointer;
`;

const Formlist = (prop) => {
  const [items, setItems] = useState(prop.input);

  useEffect(() => {
    setItems(prop.input);
  }, [prop.input]);

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <div>
              <input type="checkbox"  />
              <Buttoninput onClick={() => removeItem(index)}>Delete</Buttoninput>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Formlist;
