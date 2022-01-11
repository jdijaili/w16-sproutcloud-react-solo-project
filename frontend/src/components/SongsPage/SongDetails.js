import './SongDetail.css';

const SongDetails = ({ song }) => {

    const handleEdit = () => {
       
    };

    return (
        <>
            <p>{song.title}</p>
            <img className='songArt' alt={`${song.title}'s art`} src={song.imgUrl}/>
            <button onClick={handleEdit}>Edit</button>
        </>
    )
};

export default SongDetails;
