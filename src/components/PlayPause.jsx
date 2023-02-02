import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, handlePause, handlePlay, song, customeStyle }) => (
  (isPlaying && activeSong?.title === song.title
    ? (
      <FaPauseCircle
        onClick={handlePause}
        className={customeStyle}
      />
    )
    : (
      <FaPlayCircle
        onClick={handlePlay}
        className={customeStyle}
      />
    ))
);

export default PlayPause;
