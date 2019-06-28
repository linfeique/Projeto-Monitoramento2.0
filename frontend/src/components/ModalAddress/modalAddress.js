import React, { Component } from 'react';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

export default class ModalAddress extends Component {

    toggle = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if (!this.props.isOpen) {
            return null;
        }
        return (
            <Toast isOpen={this.props.isOpen} style={{position: 'absolute', top: 20, right: 20, width: 350}}>
                <ToastHeader toggle={this.toggle()} icon="danger">
                    Teste de Ip
                </ToastHeader>
                <ToastBody>
                    O ip está na rede mas não está respondendo
                </ToastBody>
            </Toast>
        );
    }
}
