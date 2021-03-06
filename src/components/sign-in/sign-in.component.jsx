import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state={
            email: '',
            password: ''
        };
    }

    onSubmit = async (e)=>{
        e.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            });//clear state after success
        } catch(error) {
            console.log("error signing in with email/password: ",error);
        }
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
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignin>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;