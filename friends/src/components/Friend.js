import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friend = ({ friend }) => {
  const clickHandler = (e) => {
    console.log(e.target.id);

    axiosWithAuth()
      .delete(`/api/friends/${e.target.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div onClick={clickHandler}>
      <p id={friend.id}>{friend.name}</p>
    </div>
  );
};

export default Friend;
