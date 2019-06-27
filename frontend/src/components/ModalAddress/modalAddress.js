import React, { Component } from 'react';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default class ModalAddress extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        return (
            <Toast>
                <ToastHeader icon="primary">
                    Reactstrap
                </ToastHeader>
                <ToastBody>
                    This is a toast with a primary icon — check it out!
                </ToastBody>
            </Toast>
        );
    }
}
