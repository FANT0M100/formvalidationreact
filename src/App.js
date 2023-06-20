import React from "react";
import Input from "./components/Input,";

function App() {
  return (
    <div className="sign-up">
      <form>
        <Input
          type="text"
          id="username"
          label="Username"
          placeholder="Enter Username"
        />
      </form>
    </div>
  );
}

export default App;
