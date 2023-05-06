import React from "react";

function UserProfile() {
  const name = localStorage.getItem("name");
  const avatar = localStorage.getItem("avatar");

  return (
    <div className="user-profile">
      <img src={avatar} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default UserProfile;
