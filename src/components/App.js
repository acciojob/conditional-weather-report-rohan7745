// App.js
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 25,
      conditions: 'Sunny',
      threshold: 20,
    };
  }

  render() {
    const { temperature, conditions, threshold } = this.state;

    // Define the style based on the temperature and threshold
    const temperatureStyle = {
      color: temperature > threshold ? 'red' : 'blue',
    };

    return (
      <div>
        <h1>Weather App</h1>
        <p>Temperature: <span style={temperatureStyle}>{temperature}</span></p>
        <p>Conditions: {conditions}</p>
      </div>
    );
  }
}

export default App;
