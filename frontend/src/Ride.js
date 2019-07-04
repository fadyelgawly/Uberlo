import React , { Component } from 'react';
import { Route, Redirect } from 'react-router'
import SignUp from './components/Form';



export class Ride extends Component{

    state = { 
        loggedIn: false
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    onSubmit = () => {
        console.log('Submitting');

        fetch('http://localhost:4000/user/signup', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( this.state )
            }).then(function(data){ 
                if(data.status == 200){
                    this.setState({ loggedIn : true });

                }

            });

        
    };
    render(){
        if (this.state.loggedIn){
            return(
                <Redirect to= "/request/ride"/>
            );
        }
        return(
            <div>
                <SignUp 
                handleInputChange={this.handleInputChange}
                onSubmit = { this.onSubmit}
                 />
                <p>
                {JSON.stringify(this.state.fields, null, 2)}
                </p>
                
            </div>
        )
    }
}
