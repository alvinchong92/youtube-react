import React from 'react';
import VideoListItem from '../components/VideoListItem.jsx';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (<VideoListItem key={video.etag} video={video} />)
  });

  return(
    <div>
      {videoItems}
    </div>
  )
}

export default VideoList;
