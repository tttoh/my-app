import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class NavLink extends Component {
    render() {
        const { match, location, history, staticContext, ...props } = this.props;

        var isActive = location.pathname === this.props.to;
        var activeClass = isActive ? 'active' : '';

        return (
            <li className={`nav-item ${activeClass}`}>
                <Link className="nav-link" {...props}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

NavLink.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(NavLink); //HOC