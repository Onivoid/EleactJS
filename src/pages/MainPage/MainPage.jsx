import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import logoElectron from './img/electron-logo.png';
import logoReact from './img/react-logo.png';
import logoWebpack from './img/webpack-logo.png';

class MainPage extends Component {
  constructor(props){
    super(props);
    this.ExternalLink = this.ExternalLink.bind(this);
  }
  ExternalLink(event){
    event.preventDefault();
    let link = event.target.parentElement;
    if(link.href === undefined){
      link = link.parentElement.href
      ipcRenderer.send('externalLink',link)
    } else {
      ipcRenderer.send('externalLink',link.href)
    }
  }
  render(){
    return(
      <div className="MainPage">

        <div className="message">
          <p className="title">Welcome to the BoilerPlate</p>
          <p className="subtitle">ElectronJS + React + Webpack</p>
        </div>

        <div className="stack">
          <img src={logoElectron} className="logo"/>
          <i className="fas fa-plus"></i>
          <img src={logoReact} className="logo"/>
          <i className="fas fa-plus"></i>
          <img src={logoWebpack} className="logo"/>
        </div>

        <div className="contact">
          <p className="subtitle">Developped by Logan Wilquin</p>
          <div className="social">
            <a href="https://fr.linkedin.com/in/logan-wilquin-080238153"
                onClick={this.ExternalLink}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Skullyfox"
                onClick={this.ExternalLink}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/skullyfox/?hl=fr"
                onClick={this.ExternalLink}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default MainPage;
