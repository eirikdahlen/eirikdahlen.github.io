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
                        <p>Algoritmer og datastrukturer</p>
                    </div>
                    <div className="hvr-grow-shadow">
                        <h3>TDT4160</h3>
                        <p>Datamaskiner og digitalteknikk</p>
                    </div>
                    <div className="hvr-grow-shadow">
                        <h3>TDT4145</h3>
                        <p>Datamodellering og databasesystemer</p>
                    </div>
                    <div className="hvr-grow-shadow">
                        <h3>TDT4180</h3>
                        <p>Menneske-maskin interaksjon</p>
                    </div>
                    <div className="hvr-grow-shadow">
                        <h3>TTM4100</h3>
                        <p>Kommunikasjon - Tjenester og nett</p>
                    </div>
                    <div className="hvr-grow-shadow">
                        <h3>TDT4136</h3>
                        <p>Introduksjon til kunstig intelligens</p>
                    </div>
                    <div className="hvr-grow-shadow">
                        <h3>TDT4117</h3>
                        <p>Informasjonsgjenfinning</p>
                    </div>

                </div>
            </div>
        )
    }
}


export default Compendiums;
