import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingModal extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    componentDidMount() {
        if(this.props.isShown) {
            this.handleShow();
        }
    }

    componentDidUpdate(prevProps) {
        const newProps = this.props;
        if(prevProps.isShown !== newProps.isShown) {
            this.handleShow();
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const { title: titleButtonLeft, ...buttonLeft } = this.props;
        const { title: titleButtonRight, ...buttonRight } = this.props;
        return (
            <div className="modal" tabIndex="-1" role="dialog" {...this.props} show={this.state.show? "true": "false"}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.content}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.handleClose} {...buttonLeft}>{titleButtonLeft}</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose} {...buttonRight}>{titleButtonRight}</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

LandingModal.propTypes = {
    isShown : PropTypes.bool.isRequired
}

export default LandingModal;