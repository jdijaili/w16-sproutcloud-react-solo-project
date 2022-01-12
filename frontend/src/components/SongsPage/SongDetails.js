import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditSongForm from './EditSongForm';
import './SongDetail.css';

const SongDetails = ({ songs }) => {
    const { id } = useParams();
    const song = songs.find(song => song.id === id);

    console.log(song);

    const [showEditForm, setShowEditForm] = useState(false);

    let content = null;

    if (showEditForm) {
        content = (<EditSongForm id={song.id} song={song} hideForm={() => setShowEditForm(false)} />)
    }

    const handleDelete = (e) => {
        const id = e.target.value;
        console.log(id);
        // dispatch()
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
