import "./App.css";
import {Component} from "react";
import {CardList} from "./components/card-list";
import { Top } from "./components/top-side";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({robots: data}));
  }

  render() {
    return (
      <div className="">
        <Top top_text="Муурнуудаас хайлт хийдэг жижигхэн ReactJS-app 👌😒😵‍💫" />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl uppercase font-bold py-4 font-oswald border rounded text-center bg-gray-300">
            Муурнуудын хайлт
          </h1>
          <CardList robots={this.state.robots} />
        </div>
      </div>
    );
  }
}
