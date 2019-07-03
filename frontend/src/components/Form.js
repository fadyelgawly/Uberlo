import React from 'react';

export default class Form extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        isDriver: '0',
        phone: '',
        isConfirmed: '0'
    }

    change = e => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    render(){
        return(
            <form>
                <input 
                name="username"
                placeholder= 'username' 
                value= {this.state.firstname} 
                onChange={e => this.change(e)}
                />
                <br/>
                <input 
                name="email"
                placeholder= 'email' 
                value= {this.state.firstname} 
                onChange={e => this.change(e)}
                /> 
                <br/>
                <input 
                name="phone"
                placeholder= 'phone' 
                value= {this.state.firstname} 
                onChange={e => this.change(e)}
                />  
                <br/>
                 <input 
                name="password"
                type="password"
                placeholder= 'Password' 
                value= {this.state.firstname} 
                onChange={e => this.change(e)}
                />
                <br/>
                <button onClick= {e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}
