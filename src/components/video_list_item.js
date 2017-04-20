import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="row list-group-item">
        <div className="columns medium-5">
          <img className="" src={imageUrl}/>
        </div>

        <div className="columns medium-7">
          <div className="list-group-item-title">{video.snippet.title}</div>
        </div>
    </li>
  );
};

export default VideoListItem;