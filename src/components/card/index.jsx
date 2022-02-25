import React from "react";
import "./style.css";
export const Card = props => (
  <div className="grid justify-items-center py-4">
    <img
      src={`https://robohash.org/${props.robot.id}?set=set4&size=300x300`}
      alt="cats"
      className=""
    />
    <h2 className="font-bold font-architects text-lg pt-3">{props.robot.name}</h2>
    <p className="">{props.robot.email}</p>
  </div>
);
