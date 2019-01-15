import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Layout.sass';
import { ipcRenderer } from 'electron';

class Layout extends Component {
  constructor(props){
    super(props);
    this.CloseWindow = this.CloseWindow.bind(this);
    this.MinimizeWindow = this.MinimizeWindow .bind(this);
  }
  CloseWindow(){
    ipcRenderer.send('close');
  }
  MinimizeWindow(){
    ipcRenderer.send('minimize');
  }
  render(){
    return(
      <div class="Layout">
        <div className="app_Navigation">

          <div className="infos">
            <i className="fas fa-layer-group"></i>
            <p className="appName"> Electron UI </p>
          </div>

          <div className="controls">
            <div className="navButton Close_button" onClick={this.CloseWindow}>
              <i className="fas fa-times"></i>
            </div>
            <div className="navButton Minimize_button" onClick={this.MinimizeWindow}>
              <i className="fas fa-angle-down"></i>
            </div>
          </div>

        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
