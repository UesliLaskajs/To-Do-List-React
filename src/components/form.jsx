import { useState } from "react";
import styled from "styled-components";

// Styled Components
const FormStyled = styled.form`
  width: 300px;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

const InputButton = styled.input`
  width: 80px;
  height: 50px;
  margin-top: 10px;
  background-color: blue;
  color :white;
  border:1px solid gray;
  border-radius:10px;
  cursor:pointer;
`;

const Form = (prop) => {
  const [input, setInput] = useState("");

  const handleEvent = (e) => {
    e.preventDefault();
    prop.inputInit(input);
    setInput("");
  };

  return (
    <FormStyled onSubmit={handleEvent}>
      <input
        type="text"
        placeholder="Add a Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <InputButton type="submit" value={"Add"} />
    </FormStyled>
  );
};

export default Form;
