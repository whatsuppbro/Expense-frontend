import React, { useState } from "react";
import bg from "../../img/bg.png";
import logo from "../../img/logo.png";
import icon from "../../img/previous.png";

function ResetPassword({ setShowResetPassword }) {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl =
        "https://expense-backend-api.cyclic.app/api/v1/reset-password";

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
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
    <PassStyled bg={bg} className="Pass">
      <div className="pass-container">
        <div className="pass-container2">
        <img className="register-image" src={logo} alt="เปลี่ยนรหัสผ่าน" />
          <h2>เปลี่ยนรหัสผ่าน</h2>
          <form className="pass-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="อีเมลที่ต้องการเปลี่ยน"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="รหัสผ่านใหม่"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Update Password</button>
          </form>
          <button className="btn-login" onClick={() => setShowLogin(true)}>
            <img src={icon} alt="กลับ" />
          </button>
        </div>
      </div>
    </PassStyled>
  );
}

const PassStyled = styled.div`
font-family: 'Noto Sans Thai', sans-serif;
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

.register-sub{
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.input-email {
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

.input-pass {
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

.input-image {
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

.btn-register {
  font-family: 'Noto Sans Thai', sans-serif;
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

.btn-register:hover {
  background-color: #fff;
}

.btn-register:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

label {
  font-size: 14px;
  margin-bottom: 5px;
}

.btn-register:active {
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

.btn-login img {
  width: 100%;
  max-width: 50px;
  text-align: right;
  position: absolute;
  bottom: -7px;
  right: 0;
  padding: 0;
  transform: rotate(180deg);
  cursor: pointer;
}
`;

export default ResetPassword;
