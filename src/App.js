import React, { useState } from "react";
import FormikForm from "./components/FormikForm/FormikForm";
import SeccussReg from "./components/SeccussReg/SeccussReg";

const wrapBlock = {
 display: 'flex',
 justifyContent: 'center',
 marginTop: '100px'
}

function App() {
  const [reg, setReg] = useState(true);

  const regHandler = (status) => {
    setReg(status);
  };

  return (
    <div style={wrapBlock}>
      {reg ? <FormikForm reg={regHandler} /> : <SeccussReg reg={regHandler}/>}
    </div>
  );
}

export default App;
