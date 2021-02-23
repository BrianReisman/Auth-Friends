import React from "react";

const Friend = (props) => {
  console.log(props.friend);
  return (
    <div>
      <p id={props.friend.id} onClick={props.deleteHandler}>{props.friend.name}</p>
    </div>
  );
};

export default Friend;
