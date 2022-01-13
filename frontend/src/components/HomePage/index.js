import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSongs } from "../../store/songs";
import './Home.css'

const Home = ({ isLoaded }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getUserSongs(sessionUser.id));
    }, [sessionUser]);

    let homeContent;
    if (sessionUser) {
        homeContent = (
            <p>hallo</p>
        )
        // console.log(homeContent);
    } else {
        homeContent = (
            <div className='home general'>
                <h3> a place to care for your plants through <span>sound</span></h3>
                <img src='https://images.unsplash.com/photo-1583324894148-34153c8db3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80' alt='room illustration'></img>
            </div>
        )
    }

    return (
        <>
            <div className='home user'>
                {/* <h1>Sproutcloud</h1> */}
                {isLoaded && homeContent}
            </div>
            <footer className='footer'>
                <h3>Jennifer Dijaili</h3>
            </footer>
        </>
    )
};

export default Home;
