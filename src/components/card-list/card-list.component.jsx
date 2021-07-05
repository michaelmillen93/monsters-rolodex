import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

//Components take in props (parameter from function components)

//One of the main properties that exists on props object is called children (if no children it is null.) children are what is passed in between the brackets of our component that gets called

//Cardlist is responsible for mapping through monsters and rendering them to DOM
export const Cardlist = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

//When do we break things down into components? -When we want to apply functionality to a specific element?

//State vs Props
