import React, { Component } from 'react';
import NavBar from "./component/NavBar";
import PasswordStrengthMeter from "./component/PasswordStrengthMeter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
    }
  }

  render() {
    const { password } = this.state;

    return (
      <div className="App">
        <NavBar/>
        <p>This is my testing page.</p>
        <p>Do not key in any sensitive information here.</p>
        <div className="meter">
          <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
          <PasswordStrengthMeter password={password} />
        </div>
      </div>
    );
  }
}

export default App;