import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/songs";
import SongDetails from "./SongDetails";

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
            {songs?.map((song) => (
                <SongDetails key={song.id} song={song}/>
            ))}
        </div>
    );
};

export default Songs;
