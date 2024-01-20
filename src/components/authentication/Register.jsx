import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // created an object of useNavigate hook
  const navigateTo = useNavigate();

  // created a function to redirect to the path
  const handleSubmit = (e) => {
    e.preventDefault();

    let url = `http://localhost:3000/user`;
    
    if (email !== '' && password !==''){
      let body_data, header_data;

      body_data = {
        f_name: firstName,
        l_name: lastName,
        email: email,
        password: password,
        is_active: false,
        token: ""
      };
  
      header_data = {
        "Content-Type": "application/json",
      };
  
      fetch(url, {
        method: "POST",
        headers: header_data,
        body: JSON.stringify(body_data),
      })
      .then((response) => { return response.json() })
      .then((data) => {
        if ('id' in data){
          alert("You have successfully registered with us.")
          navigateTo('/login')   
        }else{
          alert("An error occurred.")
        }
      });
    }
  };

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="last_name"
          id="email"
          placeholder="abc@def.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
