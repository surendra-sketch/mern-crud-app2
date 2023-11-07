import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const route = useNavigate();
  const addUser = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
    };

    const res = await fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res)
      .catch((err) => console.log(err));

    if (res.ok) {
      setEmail("");
      setName("");
      route("/");
    } else {
      alert("User not added please try with other email");
    }
  };

  return (
    <section className="add">
      <div className="form-container">
        <form onSubmit={addUser}>
          <div className="input-con">
            <label htmlFor="name">Name :</label>
            <input
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Entere your name"
            />
          </div>
          <div className="input-con">
            <label htmlFor="email">Email :</label>
            <input
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Entere your email"
            />
          </div>

          <button type="submit">add user</button>
        </form>
      </div>
    </section>
  );
};

export default AddUser;
