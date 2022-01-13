import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllSongs } from "../../store/songs";
import Player from "../AudioPlayer/AudioPlayer";
import '../AudioPlayer/AudioPlayer.css';

const Songs = () => {
    const dispatch = useDispatch();

    const songs = useSelector(state => state.songs.list);
    console.log(songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    return (
        <div>
            <h2>~ Songs ~</h2>
            {songs.map((song) => (
                <div key={song.id} id={song.id}>
                    <h3>{song.title}</h3>
                    <Link to={`/songs/${song.id}`}>
                        <img className='songArt' alt={`${song.title}'s art`} src={song.imgUrl} />
                    </Link>
                    <div className='audio-player'>
                    <Player songUrl={song.songUrl} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Songs;
