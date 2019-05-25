import React,{Component} from 'react';
import './App.css';
import Description from '../src/components/Description';
import Entry from '../src/components/Entry';
import Weather from '../src/components/Weather';

const Api_key = "4c25517f68951a403ad2a8e540c122e3";

class App extends Component {
  state = {
    temperature:undefined,
    country:undefined,
    city:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }

detectweather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const call_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_key}`);
  const data = await call_api.json();
  if (city && country) {
   
    this.setState({
    temperature:data.main.temp - 273,
    country:data.sys.country,
    city:data.name,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:""
    });
  } else {

    this.setState({
      temperature:undefined,
      country:undefined,
      city:undefined,
      humidity:undefined,
      description:undefined,
      error:"Please enter some location"
      });
  }
}
  render() {
    return(
      <div>
        < Description /><br></br>
        < Entry detectweather = {this.detectweather} /><br></br>
        <Weather temperature = {this.state.temperature}
        country = {this.state.country}
        city = {this.state.city}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error} />
      </div>
    );
  }
};

export default App;
