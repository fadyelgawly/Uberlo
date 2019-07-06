import React , { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import axios from 'axios';

export class RequestRide extends Component {

    state = {};


    componentDidMount(){

        const userJSON =  localStorage.getItem('userdata');
        const user = JSON.parse(userJSON).userInfo;

        this.setState( {
            rider: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            fromArea: 0,
            toArea:2
        });
    
    }


   
     

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    onSubmit = () => {

        

        axios.post('http://localhost:4000/rides/requestRide', {
            ...this.state
        })
        .then(function (response) {

        })
        .catch(function (error) {
            console.log(error);
        })
    };
   
    render(){

        return(
            <div>
                <h2>
                        Hello {this.state.firstname} {this.state.lastname}
                    </h2>
                <Container maxWidth="xs">
                    
                    <Grid>   
                        <PopupState 
                        variant="popover" 
                        popupId="demo-popup-menu">  
                            {popupState => (
                            <React.Fragment>
                            <Button 
                            fullWidth
                            variant="contained" {...bindTrigger(popupState)}>
                            From
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Masr El Gedida</MenuItem>
                                <MenuItem onClick={popupState.close}>Tagamoa</MenuItem>
                                <MenuItem onClick={popupState.close}>Zamalek</MenuItem>
                            </Menu>
                        </React.Fragment>
                        )}
                        </PopupState>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {popupState => (
                            <React.Fragment>
                            <Button 
                            fullWidth
                            variant="contained" {...bindTrigger(popupState)}>
                            To
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Masr El Gedida</MenuItem>
                                <MenuItem onClick={popupState.close}>Tagamoa</MenuItem>
                                <MenuItem onClick={popupState.close}>Zamalek</MenuItem>
                            </Menu>
                        </React.Fragment>
                        )}
                        </PopupState>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick= {this.onSubmit}>
                        Request Ride
                        </Button>
                    </Grid> 
                </Container>
            </div>
        )
    }
}
