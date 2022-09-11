import React from 'react';
import { Button } from 'react-daisyui';
import facebook from '../../../Images/Social/facebook.png'
import Google from '../../../Images/Social/google.png'
import Github from '../../../Images/Social/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

    return (
        <div className='mt-8'>
            <div className="flex flex-col gap-x-2 items-center">
                <Button onClick={() =>
                    signInWithFacebook()}
                    className='w-80 mb-3' color="info">
                    <img className='w-8 pr-2' src={facebook} alt="" />
                    Facebook
                </Button>
                <Button onClick={() =>
                    signInWithGoogle()}
                    className='w-80 mb-3' color="info">
                    <img className='w-8 pr-2' src={Google} alt="" />
                    Google
                </Button>
                <Button onClick={() =>
                    signInWithGithub()}
                    className='w-80 mb-3' color="info">
                    <img className='w-8 pr-2' src={Github} alt="" />
                    Github
                </Button>

            </div>
        </div>
    );
};

export default SocialLogin;