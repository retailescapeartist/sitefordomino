import React from 'react';
import './ArtShowcasePage.css';

const ArtShowcasePage = () => {
  return (
    <div className="art-showcase-content">
      <h1>Art Showcase</h1>
      <div className='gallery-grid'>
        <div className='gallery-item gallery-grid-row-2 gallery-grid-col-2'>
          <img className='gallery-grid-col-2 gallery-grid-row-2' src='https://picsum.photos/200/300' alt=''></img>
          <div className='overlay'>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>

        <div className='gallery-item'>
          <img className='gallery-grid-col-2 gallery-grid-row-2' src='https://picsum.photos/200/300' alt=''></img>
          <div className='overlay'>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>

        <div className='gallery-item'>
          <img className='gallery-grid-col-2 gallery-grid-row-2' src='https://picsum.photos/200/300' alt=''></img>
          <div className='overlay'>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>

        <div className='gallery-item'>
          <img className='gallery-grid-col-2 gallery-grid-row-2' src='https://picsum.photos/200/300' alt=''></img>
          <div className='overlay'>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>

        <div className='gallery-item'>
          <img className='gallery-grid-col-2 gallery-grid-row-2' src='https://picsum.photos/200/300' alt=''></img>
          <div className='overlay'>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>

        <div className='gallery-item'>
          <img className='gallery-grid-col-2 gallery-grid-row-2' src='https://picsum.photos/200/300' alt=''></img>
          <div className='overlay'>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>
        {/* Repeat similar structure for other gallery items */}
      </div>
    </div>
  );
};

export default ArtShowcasePage;