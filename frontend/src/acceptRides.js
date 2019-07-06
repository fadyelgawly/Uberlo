import React , { Component } from 'react';
import ReactTable from "react-table";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import "react-table/react-table.css"
import axios from "axios"
//import { makeStyles } from '@material-ui/core/styles';



export  class acceptRides extends Component {
     
  
 
    constructor(props) {
        super(props);
        this.state={
            rides:[]
        };
    }

    componentDidMount(){

        const self = this;
    
        

        axios.get('http://localhost:4000/rides/getAvailableRides', {
            ...this.state
        })
        .then(function (response) {
            self.setState({ rides: response.data.rides});
            console.log(self.state);

        })
        .then(response=>response.json())
        .then(posts=>{
            
        })
        .catch(function (error) {
            console.log(error);
        });
    
}


    

    render() {
const columns= [
    {
        Header:"Ride No",
        accessor:"rideNo"
    },
    {
        Header:"Rider",
        accessor:"rider"
    },
    {
        Header:"Ride Status",
        accessor:"rideStatus"
    },
    {
        Header:"Fare",
        accessor:"originalFare"
    },
    {
        Header:"From",
        accessor:"fromArea"
    },
    {
        Header:"To",
        accessor:"toArea"
    },
    {
        Header:"Driver",
        accessor:"driver"
    },
    {
        Header:"Request Time",
        accessor:"requestTime"
    },
    {
        Header:"Pick-up Time",
        accessor:"pickupTime"
    },
    {
        Header:"Dropoff Time",
        accessor:"dropiffTime"
    }


]
       return(
        <Container component="main" maxWidth="xl">
           <ReactTable
            columns={columns}

        data={this.state.rides}></ReactTable>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={(e) => { e.preventDefault();}}>
                Accept
                </Button>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={(e) => { e.preventDefault();}}>
                Cancel
                </Button>
            </Container>
       );
}

}
