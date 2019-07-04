import React , { Component } from 'react';
import { Redirect } from 'react-router'
import LoginForm from './components/LoginForm';
import axios from 'axios';



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

        axios.post('http://localhost:4000/user/login', {
            ...this.state
        })
        .then(function (response) {
            self.setState({ 
                 loggedin : true 
            });
            localStorage.setItem('userdata', JSON.stringify(response.data));
            
        })
        .catch(function (error) {
            console.log(error);
        })
    };
    render(){
        if (this.state.loggedin){
            return(
                <Redirect to = "/request/ride"/>
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
