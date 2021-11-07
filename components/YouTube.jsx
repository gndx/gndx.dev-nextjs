import React from 'react';
import youtube from '@/data/youtube';
import random from '@/lib/random';

const YouTube = () => {
  const videos = random(youtube.items);
  return (
    <>
      <h4 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400 mb-2">Ultimo Video</h4>
      {videos?.map(video => (
        <a
          href={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}
          className="card shadow-2xl w-80 mb-2"
          key={video?.etag}
          target="_blank"
          rel="noopener noreferrer">
          <figure>
            <img className="rounded-md mb-8" src={video?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} />
          </figure>
        </a>
      ))}
    </>
  )
}

export default YouTube;