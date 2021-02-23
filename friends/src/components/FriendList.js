import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Friend from './Friend';
import NewFriendForm from './NewFriendForm';

const FriendList = (props) => {
  const [friends, setFriends] = useState([]);

  useEffect(()=>{
    const config = {
      headers: {
        //* is authorization a keyword?
        Authorization: JSON.parse(localStorage.getItem('token'))
      }
    }
    axios
      .get(`http://localhost:5000/api/friends`, config)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return(
    <div>
      <NewFriendForm/>
      {
        friends.map(friend=> {
          return <Friend friend={friend}/>
        })
      }
    </div>
)
};

export default FriendList;
