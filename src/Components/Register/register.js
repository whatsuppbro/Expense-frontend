import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../img/bg.png";
import logo from "../../img/logo.png";
import icon from "../../img/previous.png";

function Register({ setIsRegistered, setShowLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "https://expense-backend-api.cyclic.app/api/v1/register";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          avatar,
        }),
      });

      if (response.status === 201) {
        alert("Register Success");
        setShowLogin(true);
      } else {
        if (response.status === 400) {
          setErrorMessage("Register Failed");
        } else {
          setErrorMessage("Email already in use");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while registering");
    }
  };

  return (
    <RegisterStyled bg={bg} className="Register">
      <div className="container">
        <div className="container-from">
          <form className="register-sub" onSubmit={handleSubmit}>
            <img className="register-image" src={logo} alt="สมัครสมาชิก" />
            <h1 className="register-text">สมัครสมาชิก</h1>
            <div className="input-user">
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-email">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-pass">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-image">
              <input
                type="text"
                placeholder="Image"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="button-container">
                <button className="btn-register" type="submit">
                  สมัคร
                </button>
                <button
                  className="btn-login"
                  onClick={() => setShowLogin(true)}
                >
                  กลับ
                </button>
              </div>
          </form>
        </div>
      </div>
    </RegisterStyled>
  );
}

const RegisterStyled = styled.div`
font-family: "Noto Sans Thai", sans-serif;
height: 100vh;
background-image: url(${(props) => props.bg});
position: relative;
display: flex;
justify-content: center;
align-items: center;

.register-image {
  width: 100%;
  max-width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.register-text {
  text-align: center;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
}

.register-sub {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 1em;
}

.container {
  background-color: #f1f7fe;
  padding: 3em;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: 0 0 2em #e6e9f9;
}

.container-from {
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

.input-user{
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
.input-email{
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
.input-pass{
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
.input-image{
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

.btn-register,
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
  width: 48%;
  margin: 0;
}

.btn-register:hover,
.btn-login:hover {
  background-color: #fff;
}

.btn-register:active,
.btn-login:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

label {
  font-size: 14px;
  margin-bottom: 5px;
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
`;

export default Register;
