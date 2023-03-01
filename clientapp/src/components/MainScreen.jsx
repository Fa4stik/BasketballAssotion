import React, { Component } from "react";
import logo from '../assets/svg/nba_logo.svg'
export class MainScreen extends Component {

  render() {

    return (
        <div>
            <img className="w-217 h-307" src={ logo} alt="Nba Logo" />
      </div>
        
    
    )
  }
}