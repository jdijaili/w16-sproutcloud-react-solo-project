import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllSongs } from "../../store/songs";
import Player from "../AudioPlayer/AudioPlayer";
import '../AudioPlayer/AudioPlayer.css';
import './SongsPage.css';

const Songs = () => {
    const dispatch = useDispatch();

    const songs = useSelector(state => state.songs.list);
    console.log(songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    return (
        <div className='songsPage'>
            <h2>~ Songs ~</h2>
            {songs.map((song) => (
                <div key={song.id} id={song.id} className='songDiv'>
                    <h3 id='title'>{song.title}</h3>
                    <p id='artist'>{song.User.username}</p>
                    <Link to={`/songs/${song.id}`}>
                        <img id='songArt' alt={`${song.title}'s art`} src={song.imgUrl} />
                    </Link>
                    <div className='audio-player' id='player'>
                    <Player songUrl={song.songUrl} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Songs;
