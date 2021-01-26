import React, { useState, useEffect } from "react";
import axios from "axios";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  console.log(localStorage.getItem("token"));
  const getData = () => {
    axios
      .get("http://localhost:5000/api/friends", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      a<h1>asdf</h1>
      sdf
    </div>
  );
};

export default Friends;
