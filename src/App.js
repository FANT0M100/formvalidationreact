import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./components/Input,";

const schema = yup.object({
  username: yup.string().required("Username is a required field"),
  phonenumber: yup
    .string()
    .required("Phone Number is a required field")
    .matches(
      /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{3}$/,
      "Phone number is not valid"
    ),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  password: yup.string().min(6, "Password must be at 6 characters"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must be match"),
});

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

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
          errorMessage={errors.username?.message}
        />

        <Input
          type="text"
          id="phonenumber"
          label="Phone Number"
          placeholder="Enter Phone Number"
          register={{ ...register("phonenumber") }}
          errorMessage={errors.phonenumber?.message}
        />

        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Enter Email"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />

        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Enter Password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />

        <Input
          type="password"
          id="confirmpassword"
          label="Confirm Password"
          placeholder="Enter Confirm Password"
          register={{ ...register("confirmpassword") }}
          errorMessage={errors.confirmpassword?.message}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
