import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../img/bg.png";
import logo from "../../img/logo.png";
import icon from "../../img/previous.png";

function ResetPassword({ setShowResetPassword, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl =
        "https://expense-backend-api.cyclic.app/api/v1/reset-password";

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });

      if (response.status === 200) {
        alert("Password Updated Successfully");
        setShowResetPassword(false);
      } else if (response.status === 404) {
        alert("User Not Found");
      } else {
        alert("Update Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating the password");
    }
  };

  return (
    <PassStyled bg={bg} className="pass">
      <div className="pass-container">
        <div className="pass-container2">
          <img className="pass-image" src={logo} alt="เปลี่ยนรหัสผ่าน" />
          <h1 className="pass-text">เปลี่ยนรหัสผ่าน</h1>
          <form className="pass-sub" onSubmit={handleSubmit}>
            <div className="input-user">
              <input
                type="email"
                placeholder="อีเมลที่ต้องการเปลี่ยน"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-newpassword">
              <input
                type="input-newpassword"
                placeholder="รหัสผ่านใหม่"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
            <button className="btn-change" type="submit">
              ยืนยัน
            </button>
            <button
              className="btn-login"
              onClick={() => {
                setShowLogin(true);
                setShowResetPassword(false);
              }}
            >
              กลับ
            </button>
            </div>
          </form>
        </div>
      </div>
    </PassStyled>
  );
}

const PassStyled = styled.div`
  font-family: "Noto Sans Thai", sans-serif;
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .pass-image {
    width: 100%;
    max-width: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .pass-text {
    text-align: center;
  }

  .error-message {
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .pass-sub {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }

  .pass-container {
    background-color: #f1f7fe;
    padding: 3em;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: 0 0 2em #e6e9f9;
  }

  .pass-container2 {
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

  .input-user {
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

  .input-newpassword {
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

  .btn-change {
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

  .btn-change:hover {
    background-color: #fff;
  }

  .btn-change:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  label {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .btn-change:active {
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
    margin-top: 20px;
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
`;

export default ResetPassword;
