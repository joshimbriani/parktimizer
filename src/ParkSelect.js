import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import parkRides from './data/parkRides';
import Park from './Park';

class ParkSelect extends Component {
    constructor(props) {
        super(props);

        this.switchTabs = this.switchTabs.bind(this);

        this.state = {
            activeTab: this.getActiveTabFromLocation(props.location.pathname.split("/")[1])
        }
    }

    getActiveTabFromLocation(location) {
        const park = parkRides.find((park) => {
            return park.NameAbbrev === location
        })

        if (park) {
            return park.ID.toString()
        }

        return '1'
    }

    switchTabs(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    {parkRides.map((park, index) => {
                        return (
                            <NavItem key={index}>
                                <NavLink className={classnames({ active: this.state.activeTab === park.ID.toString() })} tag={Link} to={"/" + park.NameAbbrev} onClick={() => { this.switchTabs(park.ID.toString()) }}>
                                    {park.NameAbbrev}
                                </NavLink>
                            </NavItem>
                        );
                    })}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    {parkRides.map((park, index) => {
                        return (
                            <TabPane tabId={park.ID.toString()} key={index}>
                                <h1>{park.Name}</h1>
                                <Park park={park} />
                            </TabPane>
                        );
                    })}
                </TabContent>
            </div>
        );
    }
}

export default ParkSelect;