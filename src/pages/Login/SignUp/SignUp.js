import React from 'react';
import { Button, Card, Form, Hero, Input } from 'react-daisyui';
import { Link as NavigateLink } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    


    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <Hero>
                <Hero.Content className="w-full">
                    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Card.Body className='p-6'>
                            <Form onSubmit={handleSubmit} className="gap-5">
                                {/* <Form.Label title="Full Name" /> */}
                                <Input type="text" placeholder="Full Name" name='name' className="input-bordered" />
                                {/* <Form.Label title="Email" /> */}

                                <Input type="email" placeholder="Email" name='email' className="input-bordered" />

                                {/* <Form.Label title="Password" /> */}
                                <Input type="password" placeholder="Password" name='password' className="input-bordered" />
                                <label className="label">
                                    <p>
                                        <span className='label-text-alt pr-2'>Already have an account?</span>
                                        <NavigateLink to="/login" className="label-text-alt">Please Login.</NavigateLink>
                                    </p>

                                </label>
                                <Button>Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Hero.Content>
            </Hero>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;