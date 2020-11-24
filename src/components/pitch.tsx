import React from 'react';
import {Row, Col} from '@bootstrap-styled/v4';
import Button from './bits/button';

interface Props{

}

const Pitch = () => {
    return <>
        <Row>
            <Col>Description</Col>
            <Col>Story</Col>
            <Col>filler</Col>
            <Col>filler</Col>
        </Row>
        <Row>
            <Col><Button /></Col>
        </Row>
    </>
};

export default Pitch;