import React from 'react';

const VideoDetail = ({ video }) => {

  if (!video) {
    return <div>Loading...</div>;
  };

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail medium-8 columns">
      <div className="responsive-embed widescreen">
          <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="details">
        <div className="video-detail-title">{video.snippet.title}</div>
        <div className="video-detail-description">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;