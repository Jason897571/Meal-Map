
import { Button, Checkbox, Label, Modal, TextInput, Navbar } from "flowbite-react";
import { useState } from "react";

import { useMutation } from '@apollo/client';
//import { ADD_USER } from '../utils/mutations';
//import { LOGIN_USER } from '../utils/mutations';
import Auth from '../../utlis/auth';

const Navigation = () =>{
    const [openSignInModal, setOpenSignInModal] = useState(false);
    const [openSignUpModal, setOpenSignUpModal] = useState(false)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    function onCloseModal() {
        setOpenSignInModal(false);
        setOpenSignUpModal(false)
        setEmail('');
    }

    return(
        <>
            <Navbar fluid rounded className="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
                <Navbar.Brand className="logo" href="/">
                    <img src="/image/logo.png" className="mr-3 h-10 sm:h-9" alt="Logo" />
                    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">Meal Map</span>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Navbar.Link className="font-bold text-2xl" href="/">Home</Navbar.Link>
                    <Navbar.Link className="font-bold text-2xl" href="#top-choices">Top Choices</Navbar.Link>
                    <Navbar.Link className="font-bold text-2xl" href="#">Your Review</Navbar.Link>
                    <Navbar.Link className="font-bold text-2xl" href="#">Donation</Navbar.Link>
                    <Navbar.Link className="font-bold text-2xl" href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
                <Navbar.Collapse>
                    <Button onClick={() => setOpenSignInModal(true)} gradientDuoTone="greenToBlue">Sign In</Button>
                    <Button onClick={() => setOpenSignUpModal(true)} gradientDuoTone="greenToBlue">Sign Up</Button>
                </Navbar.Collapse>


                {/* Sign In Modal */}
                <Modal show={openSignInModal} size="md" onClose={onCloseModal} popup>
                    <Modal.Header />
                    <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign In</h3>
                        <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput
                            id="email"
                            placeholder="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        </div>
                        <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput
                         id="password" 
                         type="password"
                         placeholder="******" 
                         required />

                        </div>
                        <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                            Lost Password?
                        </a>
                        </div>
                        <div className="w-full">
                            <Button>Log in to your account</Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?&nbsp;
                        <Button href="#" className="" onClick={() => {onCloseModal(); setOpenSignUpModal(true)}}>
                            Create account
                        </Button>
                        </div>
                    </div>
                    </Modal.Body>
                </Modal>

                 {/* Sign Up Modal */}
                 <Modal show={openSignUpModal} size="md" onClose={onCloseModal} popup>
                    <Modal.Header />
                    <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Username" />
                            </div>
                            <TextInput
                                id="username"
                                placeholder="Name"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>


                        <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" required />
                        </div>
                        <div className="flex justify-between">
                        
                       
                        </div>
                        <div className="w-full">
                            <Button>Create your account</Button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        Have An Account?&nbsp;
                        <Button onClick={() => {onCloseModal(); setOpenSignInModal(true);}} className="">
                            Sign In
                        </Button>
                        </div>
                    </div>
                    </Modal.Body>
                </Modal>



                
            </Navbar>
        </>
    )
}

export default Navigation;