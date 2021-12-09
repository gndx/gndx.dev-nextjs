import React from 'react'

const HeroStreams = () => {
  return (
    <header className="Header mb-8">
      <div className="Header-content">
        <div className="Header-items">
          <div className="Header-item">
            <figure>
              <img src="https://arepa.s3.amazonaws.com/twitter-gndx.png" alt="Youtube" />
            </figure>
            <div className="Header-title">
              <a
                href="https://twitter.com/gndx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  <span className="mb-2">Twitter</span>@gndx
                </h2>
              </a>
            </div>
          </div>
          <div className="Header-item">
            <figure>
              <img src="https://arepa.s3.amazonaws.com/youtube.png" alt="Youtube" />
            </figure>
            <div className="Header-title">
              <a
                href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  <span className="mb-2">Youtube</span>Oscar Barajas
                </h2>
              </a>
            </div>
          </div>
          <div className="Header-item">
            <figure>
              <img src="https://arepa.s3.amazonaws.com/instagram-gndx.png" alt="Youtube" />
            </figure>
            <div className="Header-title">
              <a
                href="https://instagram.com/gndx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  <span className="mb-2">Instagram</span>@gndx
                </h2>
              </a>
            </div>
          </div>
          <div className="Header-item">
            <figure>
              <img src="https://arepa.s3.amazonaws.com/app-icons-twitch.png" alt="Twitch" />
            </figure>
            <div className="Header-title">
              <a href="https://twitch.tv/gndxdev" target="_blank" rel="noopener noreferrer">
                <h2>
                  <span className="mb-2">Twitch</span>gndxdev
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroStreams
