import React, { useEffect } from "react";
import "./ArtShowcasePage.css";

const ArtShowcasePage = () => {
  useEffect(() => {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {
      item.addEventListener("click", function () {
        this.focus();
      });

      item.addEventListener("blur", function () {
        this.classList.remove("focused");
      });
    });
  }, []);

  return (
    <section>
      <div className="art-showcase-content">
        <h1>Art Showcase</h1>
        <div className="gallery-grid">
          <div
            className="gallery-item gallery-grid-row-2 gallery-grid-col-2"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://picsum.photos/200/300"
              alt=""
            ></img>
            <div className="overlay">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://picsum.photos/200/300"
              alt=""
            ></img>
            <div className="overlay">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://picsum.photos/200/300"
              alt=""
            ></img>
            <div className="overlay">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://picsum.photos/200/300"
              alt=""
            ></img>
            <div className="overlay">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://picsum.photos/200/300"
              alt=""
            ></img>
            <div className="overlay">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://picsum.photos/200/300"
              alt=""
            ></img>
            <div className="overlay">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://picsum.photos/200/300"
              alt=""
            ></img>
            <div className="overlay">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>

          {/* Repeat similar structure for other gallery items */}
        </div>
      </div>
    </section>
  );
};

export default ArtShowcasePage;
