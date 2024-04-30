
import { Button, Navbar } from "flowbite-react";

const Navigation = () =>{
    return(
        <>
            <Navbar fluid rounded className="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
                <Navbar.Brand className="logo" href="#">
                    <img src="/image/logo.png" className="mr-3 h-10 sm:h-9" alt="Logo" />
                    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">Meal Map</span>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Navbar.Link className="font-bold text-2xl" href="#">Home</Navbar.Link>
                    <Navbar.Link className="font-bold text-2xl" href="#">About</Navbar.Link>
                    <Navbar.Link className="font-bold text-2xl" href="#">Your Review</Navbar.Link>
                    <Navbar.Link className="font-bold text-2xl" href="#">Donation</Navbar.Link>
                    <Navbar.Link className="font-bold text-2xl" href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
                <Button gradientDuoTone="greenToBlue">Sign Up / Sign In</Button>
            </Navbar>
        </>
    )
}

export default Navigation;