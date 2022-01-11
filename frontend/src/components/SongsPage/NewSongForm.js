import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewSong } from "../../store/songs";

const NewSongForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [songUrl, setSongUrl] = useState('');
    const [imgUrl, setImgUrl] = useState('');

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

        const createdSong = await dispatch(addNewSong(newSong));

        if (createdSong) {
            console.log(createdSong);
            history.push('/songs');
            // history.push(`songs/${createdSong.id}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title</label>
                <input
                    id='title'
                    type='text'
                    required
                    value={title}
                    onChange={updateTitle}
                />
                <label htmlFor='description'>Description</label>
                <textarea
                    id='description'
                    type='text'
                    required
                    value={description}
                    onChange={updateDescription}
                />
                <label htmlFor='songUrl'>Song Link</label>
                <input
                    id='songUrl'
                    type='text'
                    required
                    value={songUrl}
                    onChange={updateSongUrl}
                />
                <label htmlFor='imgUrl'>Image Link</label>
                <input
                    id='imgUrl'
                    type='text'
                    required
                    value={imgUrl}
                    onChange={updateImgUrl}
                />
                <button type="submit">Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default NewSongForm;
