import React, { Component } from 'react';
import PropTypes from 'prop-types';

//https://stackoverflow.com/a/42234988/4286919

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideClickAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        //https://stackoverflow.com/questions/26176519/reactjs-call-parent-method
        //https://stackoverflow.com/a/26180068/2592454
        if (typeof this.props.onOutsideClick === 'function') {
            this.props.onOutsideClick(event.target.value);
        }
    }
  }

  render() {
    return <div ref={this.setWrapperRef} onOutsideClick={this.handleClickOutside}>{this.props.children}</div>;
  }
}

OutsideClickAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  onOutsideClick: PropTypes.func
};
