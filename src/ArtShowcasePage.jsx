import React, { useEffect } from "react";
import "./ArtShowcasePage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      <Navbar />
      <div className="art-showcase-content">
        <h1>Art Showcase</h1>
        <div className="gallery-grid">
          <div
            className="gallery-item gallery-grid-row-2 gallery-grid-col-2"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://cdn.discordapp.com/attachments/368111643193901057/1290379686962266264/20240930_142532.jpg?ex=6706cb3b&is=670579bb&hm=4009cd23d83a65a974ad341506188aef4c01a8e80c99e7823652d4771d46ddca&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Tress and River</h1>
              <p>done by JayFox</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://cdn.discordapp.com/attachments/368111643193901057/1287977681752686592/20240923_182143.jpg?ex=67069ff0&is=67054e70&hm=abb5610ef286804dee89929953d9a33e9ca9d185e9941000cc46254b3a0da53f&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Tree Frogs-Coloring page</h1>
              <p>done by Mrs_Crunch</p>
            </div>
          </div>

          {/* Repeat similar structure for other gallery items */}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ArtShowcasePage;

/*layout for images:
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
*/
