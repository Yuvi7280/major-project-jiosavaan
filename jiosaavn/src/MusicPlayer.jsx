import React, { useState } from 'react';

const songs = [
  { name: 'Song 1', src: '/song1.mp3' },
  { name: 'Song 2', src: '/song2.mp3' },
  { name: 'Song 3', src: '/song3.mp3' },
];

function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playNextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
  };

  return (
    <div>
      <audio controls src={songs[currentSongIndex].src} autoPlay>
        Your browser does not support the audio element.
      </audio>
      <div>
        <button onClick={playPreviousSong}>Previous</button>
        <button onClick={playNextSong}>Next</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
