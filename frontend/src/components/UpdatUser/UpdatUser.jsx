import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./UpdatUser.css";

const UpdatUser = () => {
  const params = useParams();
  console.log(useNavigate);
  const { id } = params;

  const route = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`http://localhost:5000/api/user/${id}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setName(data.name);
      setEmail(data.email);
    };
    getData();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
    };

    const res = await fetch(`http://localhost:5000/api/user/${id}`, {
      method: "PUT",
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
    }
  };

  return (
    <section className="update">
      <div className="form-container">
        <form onSubmit={updateuser}>
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
          <div className="upt">
            <button type="submit">Update user</button>
            <button className="cancel" type="submit">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdatUser;
