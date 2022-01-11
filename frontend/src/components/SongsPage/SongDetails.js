import './SongDetail.css';

const SongDetails = ({ song }) => {
    return (
        <>
            <p>{song.title}</p>
            <img className='songArt' alt={`${song.title}'s art`} src={song.imgUrl}/>
        </>
    )
};

export default SongDetails;
