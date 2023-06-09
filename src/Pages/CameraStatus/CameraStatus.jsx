import React, { useEffect, useRef } from 'react';
import './CameraStatus.css';

const CameraStream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access the user's camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  }, []);

  return (
    <div className="camera-stream">
      <h1 className="heading">Live Camera Stream</h1>
      <video className="video" ref={videoRef}></video>
      <p className="description">Enjoy the real-time camera feed!</p>
    </div>
  );
};

export default CameraStream;
