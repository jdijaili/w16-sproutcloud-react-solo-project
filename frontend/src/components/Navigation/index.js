import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Demo from './DemoButton';
import './Navigation.css';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink exact to="/">
                    <img id='sproutcloud-logo' src='https://res.cloudinary.com/jenn/image/upload/v1641965705/sproutcloud/sproutcloud-logo_jjnca9.png' alt='sproutcloud logo' />
                </NavLink>
                <NavLink to='/songs'>Songs</NavLink>
                <h1>Sproutcloud</h1>
                <NavLink to='/upload'>Upload</NavLink>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink exact to="/">
                    <img id='sproutcloud-logo' src='https://res.cloudinary.com/jenn/image/upload/v1641965705/sproutcloud/sproutcloud-logo_jjnca9.png' alt='sproutcloud logo' />
                </NavLink>
                <NavLink to="/login">Log In</NavLink>
                <h1>Sproutcloud</h1>
                <NavLink to="/signup">Sign Up</NavLink>
                <Demo />
            </>
        );
    }

    return (
        <nav className='navbar'>
            <div className='navbar-session'>
                {isLoaded && sessionLinks}
            </div>
        </nav>
    );
}

export default Navigation;
