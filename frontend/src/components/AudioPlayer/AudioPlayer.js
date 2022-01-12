import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
  <AudioPlayer
    src="https://res.cloudinary.com/jenn/video/upload/v1641881299/sproutcloud/db%20test%20songs/Ketsa_-_A_Box_Of_Delights_qervqh.mp3"
    onPlay={e => console.log("onPlay")}
  // other props here
  />
);

export default Player;
