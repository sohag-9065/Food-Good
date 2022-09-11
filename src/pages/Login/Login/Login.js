import React, { useRef } from 'react';
import { Button, Card, Form, Hero, Input } from 'react-daisyui';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link as NavigateLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (user) {
        navigate('/home')
    }
    console.log(user)
    console.log(error)

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        console.log(email, password);
    }
    return (
        <div>
            <Hero>
                <Hero.Content className="w-full">
                    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Card.Body className='p-6'>
                            <Form onSubmit={handleSubmit} className="gap-5">
                                {/* <Form.Label title="Email" /> */}
                                <Input ref={emailRef} type="email" placeholder="Email" name='email' className="input-bordered" />

                                {/* <Form.Label title="Password" /> */}
                                <Input ref={passwordRef} type="password" placeholder="Password" name='password' className="input-bordered" />
                                <label className="label">
                                    <p>
                                        <span className='label-text-alt pr-2'>New to Food Good?</span>
                                        <NavigateLink to="/signup" className="label-text-alt">Please Sign Up.</NavigateLink>
                                    </p>

                                </label>
                                <Button>Login</Button>
                            </Form>


                        </Card.Body>
                    </Card>
                </Hero.Content>
            </Hero>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;