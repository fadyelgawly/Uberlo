import React , { Component } from 'react';
import { Redirect } from 'react-router'
import LoginForm from './components/LoginForm';



export class Login extends Component{

    state = { 
        loggedin: false
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
        const self = this;
        fetch('http://localhost:4000/user/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( this.state )
            }).then(function(data){ 
                if(data.status === 200){
                    self.setState({ 
                        loggedin : true 
                    });
                }
            });
    };
    render(){
        if (this.state.loggedin){

            console.log('logged in');

            return(
                <Redirect to= "/request/ride"/>
            );
        }
        return(
            <div>
                <LoginForm 
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
