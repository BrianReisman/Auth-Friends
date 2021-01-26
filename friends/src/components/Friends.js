import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

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

  const friendsToRender = friends.map((friend) => {
    return (
      <div>
        <button>edit</button>
        {friend.name} - {friend.id}
        <button id={friend.id} onClick={deleteClick}>
          x
        </button>
      </div>
    );
  });

  return (
    <div>
      {friendsToRender}

      {isEditing ? <Form /> : null}
    </div>
  );
};

export default Friends;
