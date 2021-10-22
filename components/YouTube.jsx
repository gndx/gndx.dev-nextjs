import React, { useState, useEffect } from 'react';
const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/search';
const channelId = 'UCw05fUBPwmpu-ehXFMqfdMw';
const youtubeKeyId = 'AIzaSyDIKiForJSN7to1rtV2W9ErOcYJ6ltdM8M';
const maxResults = '1';

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  useEffect(async () => {
    const API = `${youtubeApiUrl}?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${youtubeKeyId}`;
    const response = await fetch(API);
    const json = await response.json();
    setVideos(json);
  }, []);

  return (
    <>
      <h4 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400 mb-2">Ultimo Video</h4>
      {videos?.items?.map(video => (
        <a
          href={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
          className="card shadow-2xl w-80 mb-2"
          key={video?.etag}
          target="_blank"
          rel="noopener noreferrer">
          <figure>
            <img className="rounded-md mb-2" src={video?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} />
          </figure>
          <p className="text-md text-sm text-center text-gray-400">{video?.snippet?.title}</p>
        </a>
      ))}
    </>
  )
}

export default YouTube;