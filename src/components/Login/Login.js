import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import history from "../../util/history";
import { fetchProduct, useSignUpForm } from "../customHooks";

const Login = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    handleLogin
  );
  const [user, setUser] = useState(null);
  function handleLogin() {
    addProject(inputs);
  }

  //fetch
  function addProject(data) {
    // fetch(`/api/admin/login`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     setUser(result);
    //     const { email, password, role, name } = result;
    //     localStorage.setItem("roles", JSON.stringify(["admin"]));
    //     history.push("/app");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     alert("The user does not exist!");
    //   });
    localStorage.setItem("roles", JSON.stringify(["admin"]));
    history.push("/app");
  }

  return (
    <div>
      <div className="split left"></div>
      <div>
        <div
          className="split right "
          title="Login"
          align="center"
          description=""
        >
          <h1 className="loginHead">Fika Safe</h1>
          <form className="loginform" onSubmit={handleSubmit}>
            <br />
            <br />
            <input
              required={true}
              name="email"
              placeholder="email"
              className="loginput"
              onChange={handleInputChange}
            />
            <br />
            <input
              required={true}
              name="password"
              placeholder="password"
              type="password"
              className="loginput"
              onChange={handleInputChange}
            />
            <br />
            <div>
              <span>
                <input type="checkbox" name="" /> <label>Remember me</label>{" "}
              </span>
              <Link className="forgot" to="/forgot-password">
                Forgot Password
              </Link>
            </div>
            <br />
            <span>
              {" "}
              <button className="btn loginButton" type="submit">
                Login
              </button>
            </span>
            <Link to="/register">
              <button className="btn registerButton" type="submit">
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
