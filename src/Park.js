import React, { Component } from 'react';
import ConfigurePark from './ConfigurePark';
import ResultsPark from './ResultsPark';

class Park extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: {},
            selectedRides: []
        }
    }

    changeSelectedRides(selectedRides) {
        this.setState({
            selectedRides
        })
    }

    render() {
        if (Object.keys(this.state.route).length < 1) {
            return (
                <ConfigurePark park={this.props.park} selectedRides={this.state.selectedRides} changeSelectedRides={this.changeSelectedRides} />
            );
        } else {
            return (
                <ResultsPark park={this.props.park} results={this.state.route} />
            );
        }
    }
}

export default Park;