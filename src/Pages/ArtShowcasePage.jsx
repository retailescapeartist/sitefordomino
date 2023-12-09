import React, { useEffect } from "react";
import "./ArtShowcasePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
              src="https://cdn.discordapp.com/attachments/368111643193901057/1181772913985212567/penup_20231205_173424.jpg?ex=658246ca&is=656fd1ca&hm=dd6fe22f3e2ea57b92d2a39e8b665b64d22ea88ac2db6ac6731eea43f6ad279d&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">The gift</h1>
              <p>Artwork done by MrsCrunch</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://cdn.discordapp.com/attachments/368111643193901057/1145470522403070042/20230827_141725.jpg?ex=657f688e&is=656cf38e&hm=faded368c19f3c92410da20900941b2f60c6aefbe5aed7520fbfc3a74cc20687&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Musical Hammerheads</h1>
              <p>by MrsCrunch</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://cdn.discordapp.com/attachments/368111643193901057/1143243193685659648/20230821_002810.jpg?ex=658088b1&is=656e13b1&hm=40b2e77fc3641346a8af34f29475bbe1780046f40e4d64df7faa9cb784057816&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Percila the Chinchilla</h1>
              <p>By KhromaCat</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://cdn.discordapp.com/attachments/368111643193901057/1120017242504036495/attempt-at-a-cat.png?ex=657f1857&is=656ca357&hm=645902fcd0d6a3c6b02d5c6b6ce93a705dd3714a6ab97decbdc91c7dac3d1811&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Little Kitty</h1>
              <p>By Retailescapeartist</p>
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
