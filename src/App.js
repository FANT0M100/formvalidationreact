import React from "react";
import Input from "./components/Input,";

function App() {
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form>
        <Input
          type="text"
          id="username"
          label="Username"
          placeholder="Enter Username"
        />

        <Input
          type="text"
          id="phonenumber"
          label="Phone Number"
          placeholder="Enter Phone Number"
        />

        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Enter Email"
        />

        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Enter Password"
        />

        <Input
          type="password"
          id="confirmpassword"
          label="Confirm Password"
          placeholder="Enter Confirm Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
