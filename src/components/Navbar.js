import React, { Component } from "react";

class Navbar extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      style={{ height: '80px' }}>
  <div className="container">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link me-3" style={{ lineHeight: '60px', fontSize: '2.4rem' }} href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3" style={{ lineHeight: '60px', fontSize: '2.4rem' }}href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3" style={{ lineHeight: '60px', fontSize: '2.4rem' }}href="#portfolio">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-3" style={{ lineHeight: '60px', fontSize: '2.4rem' }}href="#skills">Skills</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
  }
}

export default Navbar;
