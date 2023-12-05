import React from "react";
import "./GameReviewsPage.css";

const GameReviewsPage = () => {
  return (
    <div className="review-grid">
      <h1 className="page-title">Game Reviews</h1>
      <div className="review-column">
        <div className="review-title">
          <h1>Game Title</h1>
        </div>
        <div className="review-image">
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/2165620/header.jpg?t=1701494131"
            alt="Pool"
          ></img>
        </div>
        <div className="review-description">
          <p>
            "Pool Cleaning Simulator is a PowerWash Simulator-esque cleaning
            game where you use a variety of tools to make filthy pools sparkling
            clean." The game recreates the entire process of cleaning,
            scrubbing, and maintaining various pools, from luxurious backyard
            havens to community swimming complexes.
          </p>
        </div>
        <div className="review-of-game">
          <h4>Review:</h4>
          <p>
            Why are these games so much fun? I hate cleaning in real life!
            <br />
            <br />
            This pool cleaning sim is still in early access, but it has definite
            potential. I liked that it had a story to each job, and dipping into
            murder and choices of how we complete a job was a nice touch. The
            music and graphics are better than expected, and the jobs have a ton
            of variety with things hidden around the area. The puzzles to work
            with the pools are fun, and there are hidden extra objectives and
            puzzles on each job.
            <br />
            <br />
            It does need some fixing though. The UV light stumped me till I
            looked it up and learned we carry it, tho the graphic is not for a
            handheld light. I did not like going underwater to work with the
            vacuum, and I didn’t have dirt down there to clean. The poor
            movement and the water just over my head was too unpleasant so
            that’s as far as I got. This is going to be an issue for people with
            worse sensory issues than me.
            <br />
            <br />
            I hope they’re able to overcome the glitches because I’m looking
            forward to playing more. Maybe for now a way to skip an incomplete
            job if we cannot complete it would be nice.
            <br />
            <br />
            This is a must for your cleaning sim collections.
          </p>
        </div>
        <div className="review-rec-not-rec">
          <h5>I recommend </h5>
        </div>
      </div>

      <div className="review-column">
        <div className="review-title">
          <h1>Game Title</h1>
        </div>
        <div className="review-image">{/* Add image URL here */}</div>
        <div className="review-description">
          {/* Add game description here */}
        </div>
        <div className="review-of-game">{/* Add game review here */}</div>
        <div className="review-rec-not-rec">
          {/* Add recommendation here */}
        </div>
      </div>

      <div className="review-column">
        <div className="review-title">
          <h1>Game Title</h1>
        </div>
        <div className="review-image">{/* Add image URL here */}</div>
        <div className="review-description">
          {/* Add game description here */}
        </div>
        <div className="review-of-game">{/* Add game review here */}</div>
        <div className="review-rec-not-rec">
          {/* Add recommendation here */}
        </div>
      </div>

      <div className="review-column">
        <div className="review-title">
          <h1>Game Title</h1>
        </div>
        <div className="review-image">{/* Add image URL here */}</div>
        <div className="review-description">
          {/* Add game description here */}
        </div>
        <div className="review-of-game">{/* Add game review here */}</div>
        <div className="review-rec-not-rec">
          {/* Add recommendation here */}
        </div>
      </div>

      <div className="review-column">
        <div className="review-title">
          <h1>Game Title</h1>
        </div>
        <div className="review-image">{/* Add image URL here */}</div>
        <div className="review-description">
          {/* Add game description here */}
        </div>
        <div className="review-of-game">{/* Add game review here */}</div>
        <div className="review-rec-not-rec">
          {/* Add recommendation here */}
        </div>
      </div>

      <div className="review-column">
        <div className="review-title">
          <h1>Game Title</h1>
        </div>
        <div className="review-image">{/* Add image URL here */}</div>
        <div className="review-description">
          {/* Add game description here */}
        </div>
        <div className="review-of-game">{/* Add game review here */}</div>
        <div className="review-rec-not-rec">
          {/* Add recommendation here */}
        </div>
      </div>
    </div>
  );
};

export default GameReviewsPage;
