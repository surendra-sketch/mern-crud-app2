import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import { Link } from "react-router-dom";

const HeroSection = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:5000/api/users")
        .then((res) => res.json())
        .then((ress) => setUsers(ress))
        .catch((err) => console.log(err));
    };
    getData();
  }, [users]);

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/api/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  return (
    <>
      {users.length >= 1 ? (
        <div className="hero">
          {users.map((user) => {
            return (
              <section className="users" key={user._id}>
                <div className="user">
                  <h1>{user.name}</h1>
                  <h3>{user.email}</h3>
                </div>
                <div className="btns">
                  <button className="del" onClick={() => deleteUser(user._id)}>
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                  <button className="edi">
                    <Link to={`/updateuser/${user._id}`}>
                      <span class="material-symbols-outlined">edit_square</span>
                    </Link>
                  </button>
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="nouser">
          <h1>No users</h1>
          <p>
            Please add some users using <span>Add User </span> button
          </p>
        </div>
      )}
    </>
  );
};

export default HeroSection;
