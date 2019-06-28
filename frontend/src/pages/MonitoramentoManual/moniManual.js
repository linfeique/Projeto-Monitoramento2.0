import React, { Component } from 'react';
import axios from 'axios';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from '../../components/MenuComum/menuC';
import background from '../../assets/imagenFundo02.png';

const styles = {
    width: '82vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url(${background})`,
    backgroundSize: 'cover'
}

export default class MonitoramentoManual extends Component {

    constructor(props){
        super(props);

        this.state = {
            address: '',
            show: false,
            show2: false
        }

        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
    }

    atualizaEstado(event){
        this.setState({ address: event.target.value });
    }

    moniManual(event){
        event.preventDefault();

        let ipAddress = {
            address: this.state.address
        }

        if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress.address)){
            return (
                axios.post('http://localhost:5000/api/equipamentos/monitoramentomanual', ipAddress)
                .then(res => {
                    console.log(res)
                    if(res.data == "Success"){
                        this.toggle()
                    } else if(res.data == "TimedOut"){
                        this.toggle2()
                    }
                })
                .catch(erro => {
                    if(erro.includes('400')){
                        alert('Esse ip não é valido');
                    } else{
                        alert('O servidor não está ligado');
                    }
                })
            );
        }
    }

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    toggle2() {
        this.setState({
            show2: !this.state.show2
        });
    }

    render() {
        return (
            <div className="moniM__body">
                <Menu />
                <Toast isOpen={this.state.show} style={{position: 'absolute', top: 20, right: 20, width: 350}}>
                    <ToastHeader toggle={this.toggle} icon="success">
                        Teste de Ip
                    </ToastHeader>
                    <ToastBody>
                        O ip está na rede e está funcionando
                    </ToastBody>
                </Toast>
                <Toast isOpen={this.state.show2} style={{position: 'absolute', top: 20, right: 20, width: 350}}>
                    <ToastHeader toggle={this.toggle2} icon="danger">
                        Teste de Ip
                    </ToastHeader>
                    <ToastBody>
                        O ip está na rede, mas não está respondendo
                    </ToastBody>
                </Toast>
                <div style={styles}>
                    <div className="moniM__box">
                        <h2>Teste de Ip</h2>
                        <form method="POST" onSubmit={this.moniManual.bind(this)}>
                            <div className="moniM__inputBox">
                                <input 
                                    type="text" 
                                    name="ipEqui" 
                                    value={this.state.address}
                                    onChange={this.atualizaEstado.bind(this)}
                                    required 
                                />
                                <label>Digite o ip</label>
                            </div>
                            <input type="submit" value="Testar" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
