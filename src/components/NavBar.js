import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';
import './NavBar.css';

const styles = {
    clearInput: {
        marginLeft: "-40px",
        zIndex: "100"
    }
}
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
    
    clearInput = event => {
        event.preventDefault();
    }

    render() {
        var { collapsed } = this.state;
        
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-left" to="/">
                        {/* <img src="/images/logo-dark.png" height="30px"/> */}
                    </Link>
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo-dark.png" height="30px"/>
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
                    <div className={`${collapsed ? "collapse" : ""} navbar-collapse justify-content-between`} id="navbarResponsive">
                        <ul className="navbar-nav mr-auto">
                            <NavLink to="/landing">Welcome</NavLink>
                            <NavLink to="/home">Home</NavLink>
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
                        {/* <form className="d-flex" onSubmit={this.handleSubmit}> */}
                        <form className="form-inline ml-auto mr-3" onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Search"/>
                                <div className="input-group-append">
                                <button className="btn bg-transparent" style={styles.clearInput} onClick={this.clearInput}>
                                    <span className="fa fa-times">
                                        <span className="sr-only">Clear</span>
                                    </span>
                                </button>
                                </div>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary">
                                        <span className="fa fa-search">
                                            <span className="sr-only">Search</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav ml-auto">
                            <NavLink to="/login">Login</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;