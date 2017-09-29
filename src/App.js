import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './components/CommentBox';
import Modal from './components/FacebookLoginModal';
import Article from './components/Article';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isOpen: false
    };
  }
  userLoginCallback = (authUser) => {
    this.setState({user: authUser});
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const src = '../columbiaMassSurveillanceCover.jpeg';
    return (
      <div className="App">
        <NavBar />
        <Modal show={this.state.user == null}
          userLoginCallback={this.userLoginCallback} />
        <h3>{this.state.user ? `Hello, ${this.state.user.displayName}!` : 'Please login!'}</h3>
        <Article coverImg={null} title={'Colombia is conducting widescale illegal surveillance'} content={null} />
        <CommentBox user={this.state.user} />
      </div>
    );
  }
}

export default App;
