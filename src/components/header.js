import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return(
        <div>
            <Jumbotron className="jumbotron">
                <div className="jumbotron_container">
                    <h1>Eirik Dahlen</h1>
                    <div className="jumbotron_info">
                        <div>MSc in Computer Science</div>
                        <div>Norwegian University of science and technology, NTNU</div>
                    </div>
                    <div className="social_buttons">
                        <button className="ui facebook button" onClick={() => window.open("https://www.facebook.com/eirik.dahlen", "_blank")}>
                            <i className="facebook icon"></i>Facebook
                        </button>
                        <button className="ui google plus button">
                            <i className="google plus icon"></i>Gmail
                        </button>
                        <button className="ui linkedin button" onClick={() => window.open("https://www.linkedin.com/in/eirik-dahlen-243a83139/", "_blank")}>
                            <i className="linkedin icon"></i>LinkedIn
                        </button>
                    </div>
                </div>
            </Jumbotron>
        </div>

    )

}


export default Header;
