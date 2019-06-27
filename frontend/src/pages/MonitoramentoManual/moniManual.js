import React, { Component } from 'react';
import axios from 'axios';

import './index.css';

import Menu from '../../components/MenuComum/menuC';
import background from '../../assets/imagenFundo02.png';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

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
        }
    }

    atualizaEstado(event){
        this.setState({ address: event.target.value });
    }

    moniManual(event){
        event.preventDefault();

        axios.post('http://localhost:5000/api/equipamentos/monitoramentomanual', {
            address: this.state.address
        })
        .then(res => {
            if(res.data == "Success"){
            }
        })
        .catch(erro => console.log(erro))
    }

    render() {
        return (
            <div className="moniM__body">
                <Menu />
                <Toast style={{position: 'absolute', top: 0, right: 0}}>
                    <ToastHeader icon="dark">
                        Reactstrap
                    </ToastHeader>
                    <ToastBody>
                        This is a toast with a dark icon — check it out!
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
