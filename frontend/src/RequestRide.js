import React , { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


export class RequestRide extends Component {
    render(){
        return(
    <div>
        <h1>
            Hello firstname lastname
        </h1>
        <Container>
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
