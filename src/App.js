import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/colorPicker/index.js';

const title = "Color Picker";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <h1 id="app-title" data-testid="app-title" className="app-title">{title}</h1>
          </div>
        </nav>
        <ColorPicker colorPickerOptions={this.props.colorPickerOptions} initialSelectedColor={this.props.initialSelectedColor}/>
      </div>
    );
  }
}

export default App;
