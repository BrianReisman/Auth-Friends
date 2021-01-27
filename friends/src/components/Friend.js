import axios from "axios";
import React, {useEffect, useState} from "react";
import Friends from "./Friends";
import Form from './Form';

const initState = {
  name: "",
  email: "",
  age: "",
};


const Friend = (props) => {
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState(initState);


console.log(data);

  useEffect(()=>{
    const id = window.location.pathname;
    axios
      .get(`http://localhost:5000/api${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const editHandler = () => {
    setIsEditing(!isEditing);
  }

  const submitHandler = (e) => {
    const id = window.location.pathname;
    e.preventDefault();
    axios
      //*so I can, after the endpoint, put a bunch of stuff, the what and headers seprately
      .put(



        `http://localhost:5000/api${id}`,




        { ...data, id: data.id},



        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        },






      )
      .then((res) => {
        setInputs(initState);
      })
      .catch((err) => {
        console.log(err);
      });





    window.location.href = "/friends";
  };


  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };


  const form = (    <form onSubmit={submitHandler}>
    <label htmlFor="name">
      <input
        type="text"
        id="name"
        onChange={changeHandler}
        placeholder="name"
        value={data.name}
      />
    </label>
    <label htmlFor="age">
      <input
        type="text"
        id="age"
        onChange={changeHandler}
        placeholder="age"
        value={data.age}
      />
    </label>
    <label htmlFor="email">
      <input
        type="text"
        id="email"
        onChange={changeHandler}
        placeholder="email"
        value={data.email}
      />
    </label>
    <button>Submit</button>
  </form>)

  console.log(props);
  return (
    <div>
      <button onClick={props.history.goBack}>back</button>
      <p>{data.name} can be reached at {data.email}</p>
      <button onClick={editHandler}>edit</button>
      {
        isEditing?
        form:
        null
      }
    </div>
  );
};

export default Friend;
