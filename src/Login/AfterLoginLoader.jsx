import { useRef, useEffect, useState } from "react";
import video from "../Images/landingLoader.mp4";
const AfterLoginLoader = ({ userData }) => {
  const [currentTime, setCurrentTime] = useState();
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = 0.5;
    const date = new Date();
    const hour = date.getHours();
    setCurrentTime(hour);
  }, []);

  return (
    <div className="loginLoader">
      <div className="loginLoader__wrapper">
        <h1>
          {currentTime < 12
            ? "Good Morning"
            : currentTime <= 18
            ? "Good Afternoon"
            : "Good Evening"}{" "}
          {userData?.data?.displayName}!
        </h1>
        <p>Getting things ready for you</p>
        <video src={video} autoPlay muted ref={videoRef}></video>
      </div>
    </div>
  );
};

export default AfterLoginLoader;
