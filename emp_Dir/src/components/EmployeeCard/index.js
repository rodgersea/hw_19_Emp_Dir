import React from "react";
// import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Country:</strong> {props.country}
          </li>
          <li>
            <strong>Profile:</strong> {props.picture}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
