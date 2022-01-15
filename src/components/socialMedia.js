import React from 'react';
import { FaTwitch } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <>
      <div className="flex justify-between">
        <a
          className="text-3xl mr-4"
          href="https://twitch.tv/gndxdev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitch className="twitch" />
        </a>
        <a
          className="text-3xl mr-4"
          href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaYoutubeSquare className="youtube" />
        </a>
        <a
          className="text-3xl mr-4"
          href="https://twitter.com/gndx"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitterSquare className="twitter" />
        </a>
        <a
          className="text-3xl mr-4"
          href="https://instagram.com/gndx"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagramSquare className="instagram" />
        </a>
        <a
          className="text-3xl"
          href="https://github.com/gndx"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub className="github" />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
