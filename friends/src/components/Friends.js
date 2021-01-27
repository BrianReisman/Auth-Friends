import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import { Route, Switch, Link } from "react-router-dom";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [oneFriend, setOneFriend] = useState();

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:5000/api/friends", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const deleteClick = () => {
  //   setIsEditing(true);
  // };
  // const deleteClick = (e) => {
  //   const filteredArr = friends.filter((friend) => {
  //     console.log(friend.id)
  //     console.log(e.target.id)

  //     if (friend.id !== e.target.id) {
  //       return friend;
  //     }
  //   });
  //   console.log(filteredArr);
  // };

  const editHandler = (e) => {
    window.location.href = "/friends/" + e.target.id;
  };

  const deleteHandler = (e) => {
    const id = e.target.id

    alert('hi')
    axios
      .delete(`http://localhost:5000/friends/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }, {params: id})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const friendsToRender = friends.map((friend) => {
    return (
      <div>
        {friend.name} - {friend.id} - {friend.age}
        <button id={friend.id} onClick={editHandler}>
          edit and other fun
        </button>
        <button id={friend.id} onClick={deleteHandler}>x</button>
      </div>
    );
  });

  return <div>{friendsToRender}</div>;
};

export default Friends;
