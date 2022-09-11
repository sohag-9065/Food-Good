import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Menu, Navbar } from 'react-daisyui';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavigationBar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <div className="flex w-full component-preview p-4  items-center justify-center gap-2 font-sans">
                <Navbar>
                    <div className="flex-1 ">
                        <Button color="ghost" className="normal-case text-4xl">
                            <Link to="/home">Food Good</Link>
                        </Button>
                    </div>
                    <div className="flex-none">
                        <Menu horizontal className="p-0">
                            <Menu.Item>
                                {
                                    user ?
                                        <button onClick={handleSignOut} className='bg-primary border-0 text-white'>Sign Out</button>
                                        :
                                        <div>
                                            <Link to="/login" >Login</Link>
                                            <Button variant="link">
                                                <Link to="/signup">Sign Up</Link>
                                            </Button>
                                        </div>
                                }
                            </Menu.Item>
                            
                        </Menu>
                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default NavigationBar;