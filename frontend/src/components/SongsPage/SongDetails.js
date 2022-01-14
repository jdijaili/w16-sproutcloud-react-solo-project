import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteSong } from '../../store/songs';
import EditSongForm from './EditSongForm';
import './SongDetail.css';

const SongDetails = ({ songs }) => {
    const { id } = useParams();
    const song = songs.find(song => song.id === +id);
    console.log(song.User)

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleDelete = (e) => {
        const id = e.target.value;
        console.log(id);
        const deletedSong = dispatch(deleteSong(id));

        if (deletedSong) history.push('/songs');
    };

    let userActions = null;
    if (sessionUser.id === song.userId) {
        userActions = (
            <>
                <button value={song.id} onClick={() => setShowEditForm(true)}>Edit</button>
                <button value={song.id} onClick={handleDelete}>Delete</button>
            </>
        )
    }

    let form = null;
    if (showEditForm) {
        form = (<EditSongForm id={song.id} song={song} hideForm={() => setShowEditForm(false)} />)
    }


    return (
        <div className='songDetailPage'>
            <div className='details'>
                <img className='songArt' alt={`${song.title}'s art`} src={song.imgUrl} />
                <div>
                    <h2>{song.title}</h2>
                    <h3>{song.User.username}</h3>
                    <p>{song.description}</p>
                    {userActions}
                    {form}
                </div>
            </div>
        </div>
    );
};

export default SongDetails;
