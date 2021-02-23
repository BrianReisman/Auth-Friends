import React, {useState} from "react";

const initState = {
  name: '',
  age: '',
  email: '',
}

const NewFriendForm = (props) => {
  const [form, setForm ] = useState(initState);
console.log(form);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const changeHandler = (e) => {
    setForm({...form, [e.target.id]: e.target.value})
  }

  return (
    <form>
      <label htmlFor="name">
        <input id="name" placeholder="name" type="text" onChange={changeHandler} value={form.name}/>
      </label>
      <label htmlFor="age">
        <input id="age" placeholder="age" type="text" onChange={changeHandler} value={form.age}/>
      </label>
      <label htmlFor="email">
        <input id="email" placeholder="email" type="email" onChange={changeHandler} value={form.email}/>
      </label>
      <button>Join our friends!</button>
    </form>
  );
};

export default NewFriendForm;
