import React , { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


export class RequestRide extends Component {
    render(){
        return(

    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Your location
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Masr El Gedida</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Tagamoa</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Zamalek</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

        )
    }
}
