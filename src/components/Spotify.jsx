import React from 'react';

const SpotifyEmbed = () => {
  return (
    <>
      <iframe
        title="Embedded Spotify Track"
        className="spotify-iframe" // Apply the CSS class here
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0Yxoavh5qJV?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  );
};

export default SpotifyEmbed;

