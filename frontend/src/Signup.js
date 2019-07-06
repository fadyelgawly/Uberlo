import React , { Component } from 'react';
import { Redirect } from 'react-router'
import SignupForm from './components/Form';



export class Signup extends Component{

    state = { 
        signup: false
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
        const self = this;
        fetch('http://localhost:4000/user/signup', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify( this.state )
            }).then(function(data){ 
                if(data.status === 200){
                    self.setState({ 
                        signup : true 
                    });
                }
            });
    };
    render(){
        if (this.state.signup){

            return(
                <Redirect to= "/login"/>
            );
        }
        return(
            <div>
                <SignupForm 
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
