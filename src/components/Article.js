import React, { Component } from 'react';
import Background from '../images/columbiaMassSurveillanceCover.jpeg';


class Article extends Component {
    render() {
        const bgStyle ={
            width: '100%',
            height: '400px',
            background: `url(${Background}) no-repeat center center`,
            backgroundSize: 'cover',
            opacity: '.75'
        };
        return (
            <div className="App"w>
                <div style={bgStyle} />
                <h1> { this.props.title }</h1>
                <p className="content">Want to know why it's important to have checks on mass surveillance programs?
                    Colombia should serve as a good example. Privacy International reports that the
                    country not only collects bulk internet and phone data on a grand scale, but violates
                        the law in the process -- it's supposed to require judicial approval for any surveillance,
                        but regularly ignores that oversight. Colombian agencies have also relied on controversial
                        tools like IMSI catchers (which scoop up nearby cellphone data) and Hacking Team's spyware,
                        and they've sought to expand their powers rather than rein things in.<br /><br />
                        It's no secret that Colombia has a history of surveillance, fueled in no small part by its
                            decades-long battles with rebels and drug cartels. And unfortunately, the pressure to keep
                            an eye on communications isn't likely to drop anytime soon. A Venezuelan immigrant crackdown
                            has forced many Colombia-born residents back to their homeland, increasing tensions between
                            the two countries. It may take a long while before the political climate is truly conducive to surveillance reform.
                            <br /><br />[Image credit: AP Photo/Fernando Vergara]
                </p>
            </div>
        );
    }
}

export default Article;
