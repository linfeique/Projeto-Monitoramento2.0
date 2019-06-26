import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './index.css';

import logo from '../../assets/logo.svg';
import Background from '../../assets/lado_direito.jpg';

const styles = {
    width: "80vw",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            senha: ''
        }
    }

    atualizaEstado(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    fazerLogin(event){
        event.preventDefault();

        axios.post('http://localhost:5000/api/login', {
            email: this.state.email,
            senha: this.state.senha
        })
        .then(res => {
            if(res.status == 200){
                localStorage.setItem('usuario-monitech', res.data)
                this.props.history.push('/paginainicial');
            }
        })
        .catch(erro => console.log("Erro: ", erro))
    }

    render(){
        return(
            <div className="login__body">
                <div style={styles}>

                </div>
                <div className="login__lado__esquerdo">
                    <div className="login__imagem">
                        <img src={logo} />
                    </div>
                    <div className="login__form__exterior">
                        <form className="login__formulario" method="POST" onSubmit={this.fazerLogin.bind(this)}>
                            <label htmlFor="email">
                                <span>Email:</span>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="login__input" 
                                    name="email" 
                                    placeholder="Digite seu email" 
                                    value={this.state.email}
                                    onChange={this.atualizaEstado.bind(this)}
                                    required
                                />
                            </label>
                            
                            <label htmlFor="senha">
                                <span>Senha:</span>
                                <input 
                                    type="password"
                                    id="senha" 
                                    className="login__input" 
                                    name="senha" 
                                    placeholder="Digite sua senha" 
                                    value={this.state.senha}
                                    onChange={this.atualizaEstado.bind(this)}    
                                    required 
                                />
                            </label>
                            
                            <input type="submit" id="login__btn" value="Logar" />

                            <Link className="login__link" to="/register">Não tem uma conta? <span>Clique aqui</span></Link>
                        </form>
                    </div>
                    <div className="login__copyright">
                        <span>Copyright Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;