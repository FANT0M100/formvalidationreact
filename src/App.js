import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./components/Input,";

const schema = yup.object({});

function App() {
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Input
          type="text"
          id="username"
          label="Username"
          placeholder="Enter Username"
          register={{ ...register("username") }}
        />

        <Input
          type="text"
          id="phonenumber"
          label="Phone Number"
          placeholder="Enter Phone Number"
          register={{ ...register("phonenumber") }}
        />

        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Enter Email"
          register={{ ...register("email") }}
        />

        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Enter Password"
          register={{ ...register("password") }}
        />

        <Input
          type="password"
          id="confirmpassword"
          label="Confirm Password"
          placeholder="Enter Confirm Password"
          register={{ ...register("confirmpassword") }}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
