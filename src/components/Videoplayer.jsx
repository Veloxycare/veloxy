import React, { useRef, useState } from "react";
import {  CgPlayPauseO, CgPlayButtonO } from "react-icons/cg";

const Videoplayer = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const toggleVideo = (videoRef, isPlaying, setIsPlaying) => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleHover = (setIsHovered) => {
    setIsHovered(true);
  };

  const handleHoverLeave = (setIsHovered) => {
    setIsHovered(false);
  };

  return (
    <div className="container rounded-3xl lg:w-[1340px] w-full px-16 mx-auto mb-10">
      <div className="flex flex-col lg:flex-row w-full gap-10 z-10">
        {/* Video 1 */}
        <div
          className="relative w-full lg:w-1/2 "
          onMouseEnter={() => handleHover(setIsHovered1)}
          onMouseLeave={() => handleHoverLeave(setIsHovered1)}
        >
          <video
            className="w-full h-full object-cover"
            ref={video1Ref}
            playsInline
            disablePictureInPicture
            loop
            src="/videos/IMG_3341.MP4"
          ></video>

          {/* Overlay Play/Pause Button */}
          {!isPlaying1 && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-50">
              <button
                onClick={() => toggleVideo(video1Ref, isPlaying1, setIsPlaying1)}
                className="text-white text-4xl"
              >
                <CgPlayButtonO size={60} className="ring-black " />
              </button>
            </div>
          )}

          {/* Pause button on hover when video is playing */}
          {isPlaying1 && isHovered1 && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-50">
              <button
                onClick={() => toggleVideo(video1Ref, isPlaying1, setIsPlaying1)}
                className="text-white text-4xl"
              >
                <CgPlayPauseO size={60} className="" />
              </button>
            </div>
          )}
        </div>

        {/* Video 2 */}
        <div
          className="relative w-full  lg:w-1/2 "
          onMouseEnter={() => handleHover(setIsHovered2)}
          onMouseLeave={() => handleHoverLeave(setIsHovered2)}
        >
          <video
            className="w-full h-full  object-cover"
            ref={video2Ref}
            playsInline
            disablePictureInPicture
            loop
            src="/videos/IMG_3342.MP4"
          ></video>

          {/* Overlay Play/Pause Button */}
          {!isPlaying2 && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-50">
              <button
                onClick={() => toggleVideo(video2Ref, isPlaying2, setIsPlaying2)}
                className="text-white text-4xl"
              >
                <CgPlayButtonO size={60} className="ring-primary " />
              </button>
            </div>
          )}

          {/* Pause button on hover when video is playing */}
          {isPlaying2 && isHovered2 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button
                onClick={() => toggleVideo(video2Ref, isPlaying2, setIsPlaying2)}
                className="text-white text-4xl"
              >
                <CgPlayPauseO size={60} className="ring-black " />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videoplayer;
