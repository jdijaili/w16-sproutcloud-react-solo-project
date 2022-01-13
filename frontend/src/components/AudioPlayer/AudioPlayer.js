import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ songUrl }) => (
  <AudioPlayer
    src={songUrl}
    onPlay={e => console.log("onPlay")}
    showVolume={false}
    showJumpControls={false}
    layout='horizontal-reverse'
    customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
  // other props here
  />
);

export default Player;
