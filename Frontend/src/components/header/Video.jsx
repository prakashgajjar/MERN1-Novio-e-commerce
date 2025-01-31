import { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="w-screen h-screen">
      <video
        ref={videoRef}
        className="w-screen h-screen object-cover"
        src="/video/1.mp4"
        autoPlay
        loop
        muted={isMuted}
        onClick={handleVideoClick}
      />
    </div>
  );
};

export default VideoPlayer;
