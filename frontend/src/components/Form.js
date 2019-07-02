import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
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
                name="firstName"
                placeholder= 'First Name' 
                value= {this.state.firstname} 
                onChange={e => this.change(e)}
                />
                <br/>
                <input 
                name="lastName"
                placeholder= 'Last Name' 
                value= {this.state.firstname} 
                onChange={e => this.change(e)}
                /> 
                <br/>
                <input 
                name="username"
                placeholder= 'Username' 
                value= {this.state.firstname} 
                onChange={e => this.change(e)}
                />  
                <br/> 
                 <input 
                name="email"
                placeholder= 'Email' 
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
