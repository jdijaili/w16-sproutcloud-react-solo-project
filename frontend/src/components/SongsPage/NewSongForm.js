import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewSong } from "../../store/songs";
import './NewSongForm.css';

const NewSongForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateSongUrl = (e) => setSongUrl(e.target.value);
    const updateImgUrl = (e) => setImgUrl(e.target.value);

    const handleCancel = () => {
        setTitle('');
        setDescription('');
        setSongUrl('');
        setImgUrl('');

        history.push('/songs');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newSong = {
            title,
            description,
            songUrl,
            imgUrl,
            userId
        };

        const createdSong = await dispatch(addNewSong(newSong))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });

        if (createdSong) {
            console.log(createdSong);
            history.push('/songs');
            // history.push(`songs/${createdSong.id}`);
        }
    };

    return (
        <div className='newSongPage'>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <form onSubmit={handleSubmit} className='form'>
                <h2>Upload a New Song</h2>
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
                <button type="submit">Create</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default NewSongForm;
