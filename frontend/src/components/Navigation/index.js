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
                <NavLink to='/songs'>Songs</NavLink>
                <NavLink to='/upload'>Upload</NavLink>
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <Demo />
            </>
        );
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
