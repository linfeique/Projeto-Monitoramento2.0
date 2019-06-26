import React, { Component } from 'react';

import './index.css';

import MenuComum from '../../components/MenuComum/menuC';

export default class PaginaInicial extends Component {
  render() {
    return (
        <div className="pi__body">
            <MenuComum />
            <div className="pi__lado__direito">
                <h1>Página sobre o sistema</h1>

                <p>
                    <span className="pi__primeiro">Lorem Ipsum</span><br/><br/>
                    <span className="pi__segundo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </p>

                <p>
                    <span className="pi__primeiro">Lorem Ipsum</span><br/><br/>
                    <span className="pi__segundo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </p>

                <p> 
                    <span className="pi__primeiro">Lorem Ipsum</span><br/><br/>
                    <span className="pi__segundo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </p>

                <p> 
                    <span className="pi__primeiro">Lorem Ipsum</span><br/><br/>
                    <span className="pi__segundo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </p>

                <p> 
                    <span className="pi__primeiro">Lorem Ipsum</span><br/><br/>
                    <span className="pi__segundo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </p>
            </div>
        </div>
    );
  }
}
