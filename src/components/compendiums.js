import React, { Component } from 'react';

import Compendium from './compendium';

class Compendiums extends Component {

    constructor(props) {
        super(props);

        this.state = {
            compendiums: [],
            filtered: [],
            keyword:''
        }
    }


    render() {
        return(
            <div className="compendium_container">
                <h1>Compendiums</h1>

                <div className="compendiums_container">

                    <div className="hvr-grow-shadow" onClick={() => window.open('/compendiums/TDT4120.pdf')}>
                        <h3>TDT4120</h3>
                        <p>Algorithms and Data Structures</p>
                    </div>
                    <div className="hvr-grow-shadow" onClick={() => window.open('/compendiums/TDT4160.pdf')}>
                        <h3>TDT4160</h3>
                        <p>Computers and Digital Design</p>
                    </div>
                    <div className="hvr-grow-shadow" onClick={() => window.open('/compendiums/TDT4145.pdf')}>
                        <h3>TDT4145</h3>
                        <p>Data Modelling and Database Management Systems</p>
                    </div>
                    <div className="hvr-grow-shadow" onClick={() => window.open('/compendiums/TDT4180.pdf')}>
                        <h3>TDT4180</h3>
                        <p>Human-Computer Interaction</p>
                    </div>
                    <div className="hvr-grow-shadow" onClick={() => window.open('/compendiums/TTM4100.pdf')}>
                        <h3>TTM4100</h3>
                        <p>Communication - Services and Networks</p>
                    </div>
                    <div className="hvr-grow-shadow" onClick={() => window.open('/compendiums/TDT4136.pdf')}>
                        <h3>TDT4136</h3>
                        <p>Introduction to Artificial Intelligence</p>
                    </div>
                    <div className="hvr-grow-shadow" onClick={() => window.open('/compendiums/TDT4117.pdf')}>
                        <h3>TDT4117</h3>
                        <p>Information Retrieval</p>
                    </div>

                </div>
            </div>
        )
    }
}


export default Compendiums;
