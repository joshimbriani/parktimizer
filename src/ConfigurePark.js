import React, { Component } from 'react';

import {
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class ConfigurePark extends Component {
    render() {
        return (
            <div>
                <Form>
                    {this.props.park.Rides.map((ride, index) => {
                        return (
                            <FormGroup key={index}>
                                <Label className="mr-2" for={"ride" + ride.NameSlug + "Essential"}>
                                    {ride.Name}
                                </Label>
                                <Input type="select" name={"ride" + ride.NameSlug + "Essential"} id={"ride" + ride.NameSlug + "Essential"}>
                                    <option>Must Do!</option>
                                    <option>If We Have Time</option>
                                    <option>We'll Pass</option>
                                </Input>
                            </FormGroup>
                        )
                    })}
                </Form>
            </div>
        );
    }
}

export default ConfigurePark;