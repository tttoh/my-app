import React, { Component } from 'react';
import PasswordStrengthMeter from "/src/components/PasswordStrengthMeter";

class PasswordStrength extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
    }
  }

  render() {
    const { password } = this.state;

    return (
      <div>
        <h3>Password Strength Meter</h3>
        <div className="meter">
          <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
          <PasswordStrengthMeter password={password} />
        </div>
      </div>
    );
  }
}

export default PasswordStrength;