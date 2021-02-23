import React, {useState} from 'react';
import axios from 'axios';

const initState = {
  username: 'Lambda School',
  password: 'i<3Lambd4',
}

const Login = (props) => {
const [form, setForm] = useState(initState);
console.log(form);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, form)
      .then(res => {
        console.log(res.data.payload)
        localStorage.setItem('token', res.data.payload)
      })
      .catch(err => {
        console.log(err)
      })
  }

 const changeHandler = (e) => {
  setForm({...form, [e.target.id]: e.target.value})
 }

  return(
    <form onSubmit={submitHandler}>
      <label htmlFor="username">
        <input id='username' type="text" placeholder='username' onChange={changeHandler} value={form.username}/>
      </label>
      <label htmlFor="password">
        <input id='password' type="text" placeholder='password' onChange={changeHandler} value={form.password}/>
      </label>
      <button>Login</button>
    </form>
)
};

export default Login;
