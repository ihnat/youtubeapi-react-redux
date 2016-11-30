import React, {Component} from 'react';

const VideoListItem = function({video, onVideoSelect}) {
  // console.log(props.video.snippet.channelTitle);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>

    </li>
  )
}


export default VideoListItem;
