import React, { useEffect, useState } from "react";
import axios from "axios";
import Friend from "./Friend";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initState = {
  name: "",
  age: "",
  email: "",
};

const FriendList = (props) => {
  const [friends, setFriends] = useState([]);
  const [form, setForm] = useState(initState);

  useEffect(() => {
    const config = {
      headers: {
        //* is authorization a keyword?
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    };
    axios
      .get(`http://localhost:5000/api/friends`, config)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatData = () => {
    return {
      ...form,
      id: Date.now(),
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formattedData = formatData();
    axiosWithAuth()
      .post(`http://localhost:5000/api/friends`, formattedData)
      .then((res) => {
        console.log(res);
        setFriends([...friends, formattedData]);
        setForm(initState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          <input
            id="name"
            placeholder="name"
            type="text"
            onChange={changeHandler}
            value={form.name}
          />
        </label>
        <label htmlFor="age">
          <input
            id="age"
            placeholder="age"
            type="text"
            onChange={changeHandler}
            value={form.age}
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            placeholder="email"
            type="email"
            onChange={changeHandler}
            value={form.email}
          />
        </label>
        <button>Join our friends!</button>
      </form>
      {friends.map((friend) => {
        return <Friend friend={friend} />;
      })}
    </div>
  );
};

export default FriendList;
