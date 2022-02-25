import React from "react";
import {Card} from "../card";

import "./style.css";
export const CardList = props => (
  <div className="grid grid-cols-3 gap-4 justify-items-center text-center">
    {props.robots.map(el => (
        <Card key={el.id} robot={el} />
    ))}
  </div>
);
