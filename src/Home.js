import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardText,
  } from 'reactstrap';
  
import announcements from './data/announcements';
import ParkSelect from './ParkSelect';

class Home extends Component {
    render() {
        return (
            <Container fluid className="mt-3">
                <Row>
                    <Col md="3" className="p-3">
                        <div className="intro">
                            <h2>
                                Welcome to Parktimizer!
                            </h2>
                            <p>
                                Parktimizer is the first and only site that generates optimal theme park days based on historical wait time data and the same cutting edge technology used by the leading tech companies. To get your optimal day, just go click on whichever park you want and select when you'll arrive and which rides are must rides, nice to rides and don't care and the system will generate your down to the minute park plan. Expect this system to get better over time as we add more and more data!
                            </p>
                        </div>
                        <h3>News</h3>
                        {announcements.map((announcement, index) => {
                            return (
                                <Card key={index}>
                                    <CardHeader>{announcement.header}</CardHeader>
                                    <CardBody>
                                        <CardText>
                                            {announcement.body}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            )
                        })}
                    </Col>
                    <Col md="9">
                        <ParkSelect location={this.props.location} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;