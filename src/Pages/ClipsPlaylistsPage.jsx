import React from 'react';
import './ClipsPlaylistsPage.css';

const ClipsPlaylistsPage = () => {
  return (
    <div className='clips-playlists-container'>
      <h1 className='page-title'>Clips & Playlists</h1>
      <div className='clip-of-week'>
        <h1 className='content-title'>Clip of The Week</h1>
        <div className='clip-player'>
        </div>
      </div>
      <div className='music'>
        <h1>Music</h1>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </div>
      <div className='movies'>
        <h1>Movies</h1>
        <li>Movie 1</li>
        <li>Movie 2</li>
        <li>Movie 3</li>
      </div>
      <div className='movie-suggestion'>
        <h1 className='content-title'>Movie Suggestion</h1>
        <div className='clip-player'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XJMuhwVlca4?si=Cl26NUE4_VlqW79P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default ClipsPlaylistsPage;
/* Layout for clips and playlists
Title
Clip of the week
Move Suggestion
Music playlist
Movies playlist
*/ 