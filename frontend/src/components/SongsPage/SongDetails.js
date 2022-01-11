import './SongDetail.css';

const SongDetails = ({ song }) => {
    return (
        <>
            <p>{song.title}</p>
            <img alt={`${song.title}'s art`} src={song.imgUrl}/>
        </>
    )
};

export default SongDetails;
