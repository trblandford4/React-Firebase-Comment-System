import React, { Component } from 'react';
import logo from '../images/perfect-sense-partner-logo.png';


class Article extends Component {
    render() {
        const logoStyle = {
            height: '50px',
            width: '125px',
            float: 'left',
            marginLeft: '10px',
            marginRight: '10px'
        };
        return (
            <div className="navbar" >
                <img src={logo} style={logoStyle} />
            </div>
        );
    }
}

export default Article;
