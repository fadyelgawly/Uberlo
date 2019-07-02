import React , { Component } from 'react';
import Form from './components/Form';

export class Ride extends Component{

    state = {
        fields:{}
    };

    onSubmit = fields => {
        this.setState({ fields });
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
