import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import OutsideClickAlerter from './OutsideClickAlerter';

class NavDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShown : false
        };

        //bind event to method at constructor for react (synthetic event)
        // this.toggleDropdown = this.toggleDropdown.bind(this);
    }
    
    //binding event at method, sample: method = (event, props) => {}
    toggleDropdown = event => {
        event.preventDefault();
        this.setState(prevState => ({
            isShown : !prevState.isShown
        }));
        
    }

    // Method automatically executed by the library.
    handleClickOutside() {
        this.setState({isShown: false});
        console.log('set clickoutside');
    }

    render() {
        const { match, location, history, staticContext, ...props } = this.props;
        
        var { isShown } = this.state; //destructuring assignment object - {}, array - []
        var showClass = isShown ? 'show' : '';
        
       
        return (
            /*dynamic bind event to method */
            <OutsideClickAlerter onOutsideClick={this.handleClickOutside}>
            <li className="dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="dropdownMenu" data-toggle="dropdown" onClick={this.toggleDropdown}>
                    {this.props.title}
                </Link>
                <div className={`dropdown-menu ${showClass}`} >
                    {this.props.children}
                </div>
            </li>
            </OutsideClickAlerter>
        );
    }
}

NavDropdown.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(NavDropdown);