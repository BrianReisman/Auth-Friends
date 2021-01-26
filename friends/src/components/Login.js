import React, { useState } from "react";
import axios from "axios";

const initState = {
  body: {
    username: "Lambda School",
    password: "i<3Lambd4",
  },
};

const Login = (props) => {
  const [formInput, setFormInput] = useState(initState);
  // console.log(formInput);
  const changeHandler = (e) => {
    setFormInput({
      ...formInput,
      body: {
        ...formInput.body,
        [e.target.id]: e.target.value,
      },
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formInput)
    axios
      .post("http://localhost:5000/api/login", formInput.body)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={submitHandler}
    >
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          placeholder="username"
          onChange={changeHandler}
          value={formInput.body.username}
        />
      </label>
      <label htmlFor="password">
        <input
          type="text"
          id="password"
          placeholder="password"
          onChange={changeHandler}
          value={formInput.body.password}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default Login;
