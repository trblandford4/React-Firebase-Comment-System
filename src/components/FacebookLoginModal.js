import React from 'react';
import PropTypes from 'prop-types';
import fire, { provider, auth } from './fire';

class FacebookLoginModal extends React.Component {
  async login() {
    const result = await auth().signInWithPopup(provider)
    this.props.userLoginCallback(result.user);
  }
  async componentWillMount() {
    const user = await fire.auth().onAuthStateChanged();
    if(user) this.props.userLoginCallback({user})
  }
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      zIndex: 10
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      zIndex: 10
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div className="footer">
            <button onClick={this.login.bind(this)}>
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    );
  }
}

FacebookLoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  userLoginCallback: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default FacebookLoginModal;