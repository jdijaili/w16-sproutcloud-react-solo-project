import { useSelector } from "react-redux";
import AudioPlayer from "../AudioPlayer";
import './Home.css'

const Home = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let homeContent;
    if (sessionUser) {
        homeContent = (
            <p>hallo</p>
        )
    } else {
        homeContent = (
            <div className='home general'>
                <h3> a place to care for your plants through <span>sound</span></h3>
                <img src='https://images.unsplash.com/photo-1583324894148-34153c8db3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80' alt='room illustration'></img>
            </div>
        )
    }

    return (
        <div className='home user'>
            <h1>Sproutcloud</h1>
            {isLoaded && homeContent}
        </div>
    )
};

export default Home;
