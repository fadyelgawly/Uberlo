import React , { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


export class RequestRide extends Component {
    render(){
        return(
    <div>
        <Container>
            <h1>
                Hello firstname lastname
            </h1>
            <Grid>   
            <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        From
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Masr El Gedida</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Tagamoa</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Zamalek</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        To
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Masr El Gedida</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Tagamoa</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Zamalek</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary">
                Request Ride
                </Button>
            </Grid> 
        </Container>
    </div>
        )
    }
}
