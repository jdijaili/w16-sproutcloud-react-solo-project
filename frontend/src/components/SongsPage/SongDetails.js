const SongDetails = ({ song }) => {
    return (
        <>
            <p>{song.title}</p>
            <img src={song.imgUrl}/>
        </>
    )
};

export default SongDetails;
