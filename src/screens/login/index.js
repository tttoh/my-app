import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./styles.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h3>Login</h3>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl
                autoFocus
                name="username"
                placeholder="username"
                value={username}
                onChange={this.handleChange}
                maxLength="50"
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
                type="password"
                maxLength="50"
              />
            </FormGroup>
            <Button
              block
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
