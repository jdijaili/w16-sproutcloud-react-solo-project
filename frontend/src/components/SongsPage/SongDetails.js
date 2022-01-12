import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteSong } from '../../store/songs';
import EditSongForm from './EditSongForm';
import './SongDetail.css';

const SongDetails = ({ songs }) => {
    const { id } = useParams();
    const song = songs.find(song => song.id === +id);

    const dispatch = useDispatch();
    const history = useHistory();
    const [showEditForm, setShowEditForm] = useState(false);

    let content = null;

    if (showEditForm) {
        content = (<EditSongForm id={song.id} song={song} hideForm={() => setShowEditForm(false)} />)
    }

    const handleDelete = (e) => {
        const id = e.target.value;
        console.log(id);
        const deletedSong = dispatch(deleteSong(id));

        if (deletedSong) history.push('/songs');
    };

    return (
        <>
            <p>{song.title}</p>
            <img className='songArt' alt={`${song.title}'s art`} src={song.imgUrl} />
            <button value={song.id} onClick={() => setShowEditForm(true)}>Edit</button>
            <button value={song.id} onClick={handleDelete}>Delete</button>
            {content}
        </>
    );
};

export default SongDetails;
