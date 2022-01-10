import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/songs";

const Songs = () => {
    const dispatch = useDispatch();

    const songs = useSelector(state => state.songs);
    console.log(songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    return (
        <div>
            <h2>~Sounds~</h2>
            {songs.map((song) => (
                <li>{song.title}</li>
            ))}
        </div>
    );
};

export default Songs;
