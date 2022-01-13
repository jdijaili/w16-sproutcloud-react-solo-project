import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSongs } from "../../store/songs";
import './Home.css'

const Home = ({ isLoaded }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    console.log(1)

    useEffect(()=> {
        if (sessionUser) dispatch(getUserSongs(sessionUser.id));
    }, [dispatch, sessionUser])

    const userSongs = useSelector(state => {
        return state.songs.mySongs
    })
    console.log('$$$$$$$$$$$$$$$$$$')
    console.log(userSongs)

    let homeContent;
    if (sessionUser) {


        homeContent = (
            <div>
                <h3>Welcome to Sproutcloud</h3>
                <h3>A place to provide the vibiest music to </h3>
                {userSongs?.map(song => {
                    <div>
                         <p>{song.title}</p>
                    </div>
                })}
            </div>
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
