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
              src="https://cdn.discordapp.com/attachments/368111643193901057/1249888967239925802/20240610_174924.jpg?ex=6678c34f&is=667771cf&hm=83df440d8e0da56a15d5819ff0324f4ed2534a26ce5d836968422f11737c27c2&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Moons & Cards</h1>
              <p>done by Mrs_Crunch</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://media.discordapp.net/attachments/368111643193901057/1240769649990307910/Tattoo_Idea_Outline_1.png?ex=66788bc8&is=66773a48&hm=6ccebe91e160574b766bf94925465971c12f438ad50962081320a1f4ce10c3b1&=&format=webp&quality=lossless&width=670&height=468"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Roses and Moonlight</h1>
              <p>done by JayFox</p>
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
