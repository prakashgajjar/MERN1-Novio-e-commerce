import { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false); 


  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play(); 
      setIsPlaying(true);  
    } else {
      videoRef.current.pause();  
      setIsPlaying(false); 
    }
  };

  return (
    <div className=''>
      <video
        ref={videoRef}
        className="w-screen h-screen cover"
        src="/video/1.mp4"
        onClick={handleVideoClick} 
      />
   
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl">
        {isPlaying ? 'Playing' : 'Paused'}
      </div>
    </div>
  );
};

export default VideoPlayer;

