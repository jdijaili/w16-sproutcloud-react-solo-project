import { useSelector } from "react-redux";
import './Home.css'

const Home = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let homeContent;
    if (sessionUser) {
        homeContent = (
            <p>hi</p>
        )
    } else {
        homeContent = (
            <div className='splash-page'>
                <img className='responsive' src='https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'/>
            </div>
        )
    }

    return (
        <div>
            <h1>Sproutcloud</h1>
            {isLoaded && homeContent}
        </div>
    )
};

export default Home;
