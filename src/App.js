//imports everything needed for react, react logo image, and css
import React, { Component } from "react";
import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

/* 
//React gives us the ability to write classes with functionality

//Using the class component gives us something called state
//State is a JS object with properties we can access any time
///class app that extends component gives us a method called setState

//onClick={() => this.setState({string: 'Hello Michael!})}


//Thinking in JSX

//JSX uses className syntax as opposed to class in JS
//Any time you see curly brackets, the inside is a JS expression
//you are not allowed to modify state without calling setState method
//Every time the state changes React intercepts the event (click) the state gets updated and that change rerenders all the components

//onClick, className, there are some differences in the attribute names between HTML and JSX but JSX essentially tries to mimic HTML, still uses attributes like src

//DYNAMIC CONTENT

//We want a unique key because React needs to know what element it needs to update if one of the elements in the array changes

ex. change name from Frankenstein --> Banshee

React knows it only needs to update the first h1, and key helps React know which element that has been updated so it does not have to rerender every component

//Any time you use the map() function inside of render or you have a list of the same jsx elements one after another they need a key attribute (and CRA will warn you about it if you miss it)

//FETCHING CONTENT

//Life Cycle Methods - Methods that get called at different stages of when the component gets rendered

componentDidMount - When the component mounts (when its put on page for first time) whatever code we run inside is called

There are 2 ways of building components -- with functions or classes, and both always return some JSX

The folder structure is important in every project, so the app will be structured with a component folder

ex. card.components.jsx --> is JS but with JSX syntax

create-react-app

npm run build - builds chunk files so code is compatible with all browsers and all component files will be combined together, so we will focus on project architecture early on

With REACT we want to break down our code into smaller pieces with their own responsibilities


MAKE SURE TO USE BACKTICKS `` FOR STRING INTERPOLATION WITH IMG SRC

//BREAKING INTO COMPONENTS

//App component surrounds everythings in which we have the state
//The state is passed down to the props
//ex. the monsters array updates with fetch, then the state is updated with monster info and is passed down to Cardlist component, so the state is turned into props that are used by the components

//onChange events fires whenever user types in or erases input
//SEARCHFIELD STATE
*/

export default App;
