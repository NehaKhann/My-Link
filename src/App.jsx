import React from "react";
import data from "./Data";
import "./styles.css";

export default function App(props) {
  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <div class="icon">
              <i class={props.icon} aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <h3>
              <a href={props.link} target="_blank">
                {props.name}
              </a>
            </h3>
            <p>{props.des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
