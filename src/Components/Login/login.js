import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../img/bg.png";
import logo from "../../img/logo.png";
import ResetPassword from "../ResetPassword/ResetPassword";

function Login({ setIsLoggedIn, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const token = localStorage.getItem("token");

  if (showResetPassword) {
    return (
      <ResetPassword
        setShowResetPassword={setShowResetPassword}
        setShowLogin={setShowLogin}
      />
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "https://expense-backend-api.cyclic.app/api/v1/login";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("avatar", data.user.avatar);
        setIsLoggedIn(true);
        alert(`Login Success. Welcome ${data.user.name}!`);
      } else if (response.status === 404) {
        alert("User Not Found");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <LoginStyled bg={bg} className="Login">
      <div className="login-container">
        <div className="login-container2">
          <form className="login-form" onSubmit={handleSubmit}>
            <img className="login-image" src={logo} alt="เข้าสู่ระบบ" />

            <div className="sec-email">
              <input
                type="email"
                placeholder="อีเมล"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="sec-pass">
              <input
                type="password"
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn-login" type="submit">
              เข้าสู่ระบบ
            </button>
          </form>
          <button className="btn-forgot-password" onClick={() => setShowResetPassword(true)} >
            ลืมรหัสผ่าน
          </button>
          <button className="btn-register" onClick={() => setShowLogin(false)}>
            สมัคร
          </button>
        </div>
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  font-family: "Noto Sans Thai", sans-serif;
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-image {
    width: 100%;
    max-width: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .login-text {
    text-align: center;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .login-container {
    background: #f1f7fe;
    padding: 3em;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0 0 2em #e6e9f9;
  }

  .login-container2 {
    background: #f1f7fe;
    padding: 3em;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    gap: 2em;
    flex-content: flex-end;
    position: relative;
    width: 500px;
    max-width: 100%;
    align-item: center;
  }

  .sec-email {
    background: white;
    box-shadow: 0 0 2em #e6e9f9;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-radius: 20px;
    color: #4d4d4d;
    margin-top: 1em;
    border: none;
    outline: none;
  }

  .sec-pass {
    background: white;
    box-shadow: 0 0 2em #e6e9f9;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-radius: 20px;
    color: #4d4d4d;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  label {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .btn-register {
    font-family: "Noto Sans Thai", sans-serif;
    font-size: 0.8em;
    text-align: right;
    background: none;
    border: none;
    color: #111;
    position: absolute;
    bottom: -7px;
    right: 0;
    padding: 0;
    cursor: pointer;
  }

  .btn-register:hover {
    color: #005f9a;
    text-decoration: underline;
  }

  .btn-forgot-password{
    font-family: "Noto Sans Thai", sans-serif;
    font-size: 0.8em;
    text-align: center;
    background: none;
    border: none;
    color: #111;
    position: absolute;
    bottom: 15px;
    right: 0;
    padding: 0;
    cursor: pointer;
  }

  .btn-forgot-password:hover {
    color: #005f9a;
    text-decoration: underline;
  }

  .btn-login {
    font-family: "Noto Sans Thai", sans-serif;
    background-color: #fbeee0;
    border: 2px solid #422800;
    border-radius: 30px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 16px;
    padding: 0 18px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 80%;
    margin-left: 10%;
  }

  .btn-login:hover {
    background-color: #fff;
  }

  .btn-login:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    .btn-login {
      min-width: 120px;
      padding: 0 25px;
    }
  }

  input {
    border: none;
    outline: none;
  }

  button:last-of-type {
    margin-top: 10px;
  }
`;

export default Login;
