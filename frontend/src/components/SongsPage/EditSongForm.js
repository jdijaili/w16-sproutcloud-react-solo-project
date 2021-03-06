import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editSong } from "../../store/songs";


const EditSongForm = ({ id, song, hideForm }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id);

    const [title, setTitle] = useState(song.title);
    const [description, setDescription] = useState(song.description);
    const [songUrl, setSongUrl] = useState(song.songUrl);
    const [imgUrl, setImgUrl] = useState(song.imgUrl);

    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateSongUrl = (e) => setSongUrl(e.target.value);
    const updateImgUrl = (e) => setImgUrl(e.target.value);

    const handleCancel = () => {
        hideForm();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const editedSong = {
            title,
            description,
            songUrl,
            imgUrl,
            userId
        };

        const song = await dispatch(editSong(editedSong, id))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

        if (song) {
            console.log(song);
            hideForm();
            history.push('/songs');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <h2>Edit Song</h2>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <input
                    id='title'
                    type='text'
                    required
                    value={title}
                    onChange={updateTitle}
                    placeholder='Title'
                />

                <textarea
                    id='description'
                    type='text'
                    required
                    value={description}
                    onChange={updateDescription}
                    placeholder='Description'
                />

                <input
                    id='songUrl'
                    type='text'
                    required
                    value={songUrl}
                    onChange={updateSongUrl}
                    placeholder='Song Link'
                />

                <input
                    id='imgUrl'
                    type='text'
                    required
                    value={imgUrl}
                    onChange={updateImgUrl}
                    placeholder='Image Link'
                />
                <button type="submit">Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default EditSongForm;
