import React from "react";

function ImageSpeaker(id) {
  return (
    <div className="container">
      <div className="image">{`./images/speaker-${id}.jpg`}</div>
    </div>
  );
}

export default ImageSpeaker;
