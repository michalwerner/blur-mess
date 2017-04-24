import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      more: false,
      other: false
    };
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  showMore() {
    this.setState({ more: true });
  }

  hideMore() {
    this.setState({ more: false });
  }

  showOther() {
    this.setState({ other: true });
  }

  hideOther() {
    this.setState({ other: false });
  }

  componentDidMount() {
    window.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    // ewentualnie compareDocumentPosition (nie testowałem)
    if (this.state.open && document.body.contains(e.target)) {
      if (this.rootRef.contains(e.target)) {
        console.log("click inside");
      } else {
        console.log("click outside");
        this.close();
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="root" ref={el => this.rootRef = el}>
          {(!this.state.open &&
            <div className="button" onClick={() => this.open()}>
              Click me
            </div>) ||
            <div>
              I'm inline editable (or something)
              <div className="showMore" onClick={() => this.showMore()}>
                Click me to expand more
              </div>
              {this.state.more &&
                <div>
                  <div>Here is more...</div>
                  <div className="hideMore" onClick={() => this.hideMore()}>
                    hide more
                  </div>
                </div>}
              <div className="showOther" onClick={() => this.showOther()}>
                Click me to show other
              </div>
              {this.state.other &&
                <div className="other">
                  <div>Here is other...</div>
                  <div className="hideOther" onClick={() => this.hideOther()}>
                    hide other
                  </div>
                </div>}
            </div>}
        </div>
      </div>
    );
  }
}

export default App;
