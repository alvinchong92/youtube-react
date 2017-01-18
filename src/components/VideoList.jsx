import React from 'react';
import VideoListItem from '../components/VideoListItem.jsx';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      key={video.etag}
      video={video}
      selectedVideo={props.onVideoSelect}
      />)
  });

  return(
    <ul className="col-md-4">
      {videoItems}
    </ul>
  )
}

export default VideoList;
