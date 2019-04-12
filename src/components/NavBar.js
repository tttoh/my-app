import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar = () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed,
        }));
    }
    
    render() {
        var { collapsed } = this.state;
        
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            tttoh.com
                        </Link>
                        <button
                            className="navbar-toggler"
                            data-toggle="collapse" 
                            data-target="#navbarResponsive"
                            onClick={this.toggleNavbar}
                            type='button'
                            >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                
                    <div className={`${collapsed ? "collapse" : ""} navbar-collapse`} id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/password">Password</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavDropdown title="Dropdown">
                                <Link className="dropdown-item" to="/dropdown1">Link 1</Link>
                                <Link className="dropdown-item" to="/dropdown1">Link 2</Link>
                                <Link className="dropdown-item" to="/dropdown1">Link 3</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/dropdown1">Link 4</Link>
                            </NavDropdown>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/500">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;