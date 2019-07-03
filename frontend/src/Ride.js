import React , { Component } from 'react';
import Form from './components/Form';

export class Ride extends Component{

    state = {
        fields:{}
    };

    onSubmit = fields => {
        this.setState({ fields });

        console.log('Submitting');


        fetch('http://localhost:4000/user/signup', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...fields })
            }).then(function(data){ 
                console.log(data.status)
                });;

        
    };
    render(){
        return(
            <div>
                <Form onSubmit= { fields => this.onSubmit(fields)} />
                <p>
                {JSON.stringify(this.state.fields, null, 2)}
                </p>
                
            </div>
        )
    }
}
