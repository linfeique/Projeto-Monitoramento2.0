import React, { Component } from 'react';

import logo from '../../assets/logo.svg';

import './index.css';

export default class MenuComum extends Component {
  render() {
    return (
        <div className="menu__engloba">
            <div className="menu__lateral">
                <a href="/Usuario/PaginaInicial"><img src={logo} /></a>
                <nav className="menu__int">
                    <ul>
                        <a href="/Usuario/PaginaInicial"><li>Página Inicial</li></a>
                        <a href="/Equipamento/RelatorioAtual"><li>Relatório Atual</li></a>
                        <a href="/Equipamento/MoniManual"><li>Monitoramento Manual</li></a>
                        <a href="/Equipamento/CadastrarEqui"><li>Cadastrar Equipamento</li></a>
                        <a href="/Usuario/Sair"><li>Deslogar</li></a>
                    </ul>
                </nav>
            </div>
        </div>
    );
  }
}
