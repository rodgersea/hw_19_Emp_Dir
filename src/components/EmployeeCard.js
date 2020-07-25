import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card container d-flex p-2 friendCard">
      <div className="row">
        <div className="col-2 img-container">
          <img className="h-100" alt={props.name} src={props.picture} />
        </div>
        <div className="col-lg content">
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
