import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`;

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault()
    const api_call = await fetch(url);
    const data = await api_call.json();
    console.log(data);
    
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
