import React, { useState, useEffect } from "react";
import axios from "axios";

const initState = {
  name: "",
  email: "",
  age: "",
};

const Form = (props) => {
  const [inputs, setInputs] = useState(initState);

  useEffect(() => {
    if (props.data) {
      setInputs(props.data);
    }
  }, []);

  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      //*so I can, after the endpoint, put a bunch of stuff, the what and headers seprately
      .post(
        "http://localhost:5000/api/friends",
        { ...inputs, id: inputs.id || (Date.now() / 100).toFixed(0) },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setInputs(initState);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = "/friends";
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          onChange={changeHandler}
          placeholder="name"
          value={inputs.name}
        />
      </label>
      <label htmlFor="age">
        <input
          type="text"
          id="age"
          onChange={changeHandler}
          placeholder="age"
          value={inputs.age}
        />
      </label>
      <label htmlFor="email">
        <input
          type="text"
          id="email"
          onChange={changeHandler}
          placeholder="email"
          value={inputs.email}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
