import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './index.css';

import logo from '../../assets/logo.svg';
import background from '../../assets/lado_direito.jpg';

const styles = {
  width: "80vw",
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

export default class Register extends Component {

  constructor(props){
    super(props);

    this.state = {
      nome: '',
      email: '',
      senha: '',
      idTipoUsuario: 2
    }
  }

  atualizaEstado(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  fazerCadastro(event){
    event.preventDefault();

    let dateM = new Date().getTime();
    let date = new Date(dateM);

    let object = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
      dataCriacao: date,
      idTipoUsuario: this.state.idTipoUsuario
    }

    axios.post('http://localhost:5000/api/usuarios', object)
    .then(res => {
      if(res.status == 200){
        alert('Usuário cadastrado com sucesso')
        this.props.history.push('/');
      }
    })
    .catch(erro => console.log("Erro: ", erro))
  }

  render() {
    return(
      <div className="register__body">
        <div className="register__lado_esquerdo">
          <div className="register__imagem">
              <img src={logo} />
          </div>
          <div className="register__form_exterior">
              <form className="register__formulario" onSubmit={this.fazerCadastro.bind(this)} method="POST">
                  <label htmlFor="nome">
                      <span>Nome:</span>
                      <input 
                        type="text" 
                        id="nome" 
                        className="register__input" 
                        name="nome" 
                        placeholder="Digite seu nome" 
                        value={this.state.nome}
                        onChange={this.atualizaEstado.bind(this)}
                        required 
                      />
                  </label>
                  
                  <label htmlFor="email">
                      <span>Email:</span>
                      <input 
                        type="email" 
                        id="email" 
                        className="register__input" 
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
                        className="register__input" 
                        name="senha" 
                        placeholder="Digite sua senha" 
                        value={this.state.senha}
                        onChange={this.atualizaEstado.bind(this)}
                        required 
                      />
                  </label>
                  
                  <input type="submit" className="register__btn" value="Cadastrar" />

                  <Link className="register__link" to="/">Errou e quer fazer login? <span>Clique aqui</span></Link>
              </form>
          </div>
          <div className="register__copyright">
              <span>Copyright Todos os direitos reservados</span>
          </div>
        </div>
        <div style={styles}>

        </div>
      </div>
    );
  }
}
