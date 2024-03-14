import React from "react";
import "./Register.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
export default function Register() {
  const [msg, setMsg] = useState();
  const { user, setUser, users, setUsers, flag, setFlag } =
    useContext(AppContext);

  const newUser = () => {
    if (Object.keys(user).length < 2) {
      setMsg(() => "Please complete the form");
    } else if (user.name === "" || user.email === "" || user.pass === "") {
      setMsg(() => "Fields cannot be blank");
    } else {
      setUsers((prev) => [...prev, user]);
      setFlag(() => 2);
    }
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="Register-msg">{msg}</div>
        <div className="Rigister-header">
          <div className="Register-signup-title">Sign Up</div>
          <div onClick={() => setFlag(() => 0)} className="close">
            &times;
          </div>
        </div>
        <div className="Register-text-box">
          <input
            required
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter Name"
            autoFocus
          ></input>
        </div>
        <div className="Register-text-box">
          <input
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Enter Email"
          ></input>
        </div>
        <div className="Register-text-box">
          <input
            onChange={(e) =>
              setUser((prev) => ({ ...prev, pass: e.target.value }))
            }
            type="password"
            placeholder="New Password"
          ></input>
        </div>

        <div>
          <button onClick={newUser}> Sign Up</button>
        </div>
      </div>
    </div>
  );
}
