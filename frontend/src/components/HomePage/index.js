import { useSelector } from "react-redux";
import './Home.css'

const Home = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let homeContent;
    if (sessionUser) {
        homeContent = (
            <div className='home-page'>
                <div className='home-text'>
                    <h3 className='intro'>Welcome to Sproutcloud</h3>
                    <h3 className='intro'>Plants are remarkable living organisms. They can perceive light, scent, touch, wind, even gravity, and are able to respond to sounds, too. Music has shown to be beneficial to plants, allowing them to grow stronger over time.</h3>
                    <h3 className='intro'>So sit back, unwind, and let your plants indulge in the harmonic sounds of Sproutcloud</h3>
                </div>
                <img className='home-img' alt='indoor plants' src='https://res.cloudinary.com/jenn/image/upload/v1642116927/sproutcloud/gemma-evans-IpmjvugXKVw-unsplash_jdito5.jpg' />
            </div>
        )
    } else {
        homeContent = (
            <div className='home general'>
                <h2> a place to care for your plants through <span>sound</span></h2>
                <img className='splash-img' src='https://images.unsplash.com/photo-1583324894148-34153c8db3f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80' alt='room illustration'></img>
            </div>
        )
    }

    return (
        <>
            <div className='home user'>
                {isLoaded && homeContent}
            </div>
            <footer className='footer'>
                <a href='https://github.com/jdijaili' target='_blank'>
                    <img className='github-icon' alt='github logo' src='https://res.cloudinary.com/jenn/image/upload/v1642119374/sproutcloud/github_1_khwdqf.png'/>
                </a>
                <h3>Jennifer Dijaili © 2022</h3>
                <a href='https://www.linkedin.com/in/jennifer-dijaili/' target='_blank'>
                    <img className='linkedin-icon' alt='linkedIn logo' src='https://res.cloudinary.com/jenn/image/upload/v1642119379/sproutcloud/linkedin_1_rewfac.png'/>
                </a>
            </footer>
        </>
    )
};

export default Home;
