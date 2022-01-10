import './AudioPlayer.css';

const AudioPlayer = () => {
    return (
        <div className='player'>
            <audio src='https://www.mfiles.co.uk/mp3-downloads/moonlight-movement1.mp3' preload='metadata'></audio>
            <button>back 15</button>
            <button>play / pause</button>
            <button>forward 15</button>

            {/* current time */}
            <div>0:00</div>

            {/* progress bar */}
            <div>
                <input type='range' />
            </div>

            {/* duration */}
            <div>5:28</div>
        </div>
    )
}

export default AudioPlayer;
