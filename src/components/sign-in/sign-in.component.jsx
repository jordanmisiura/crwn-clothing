import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state={
            email: '',
            password: ''
        };
    }

    onSubmit = (e)=>{
        e.preventDefault();

        this.setState({
            email:'',
            password:''
        });
    };

    onChange = (e)=>{
        const { value,name } = e.target;
        this.setState({[name]:value});
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.onChange}
                        label='email'
                        required/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.onChange}
                        label='password'
                        required/>
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;