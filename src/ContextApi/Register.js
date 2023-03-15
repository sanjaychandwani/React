import React, { useContext, useState, useEffect} from 'react';
import { blogContext } from './App';




function Register() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { form, setFormDetails } = useContext(blogContext)


  console.log()

  // useEffect(() => {
      
  localStorage.setItem("userdetails", JSON.stringify(form))

    
  // }, [form])



  function handleSubmit(event) {

    event.preventDefault();


    let formDetails = {
      name: name,
      username: username,
      password: password,
    }



    setFormDetails({ ...form, formDetails })

    alert("Registered succesfully")

  };

  return (
    <div className="register-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;




