import  { useState } from 'react';
import Form from './components/form';
import Formlist from './components/formlist';

function App() {
  const [input, setInput] = useState([]);

  const inputInit = (newInput) => {
    setInput((prevInput) => [...prevInput, newInput]);
  };

  return (
    <>
      <Form inputInit={inputInit} />
      <Formlist input={input} />
    </>
  );
}

export default App;