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
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    axios
      .post("http://localhost:5000/api/login", formInput.body)
      .then((res) => {
        setIsLoading(false);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading now...</p>
      ) : (
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
      )}
    </div>
  );
};

export default Login;
