import React, { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

return (
    <div>
      {
        currentForm === "login" ? < Login onFormSwitch={
        toggleForm} /> : < Signup onFormSwitch={
          toggleForm} />
      }
    </div>
);
}

export default App;

