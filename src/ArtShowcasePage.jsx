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
              src="https://cdn.discordapp.com/attachments/368111643193901057/1218655348941127720/AncientConstructs.jpg?ex=6611aebc&is=65ff39bc&hm=80a4cbda3448f38ae9e9d64bb8974debac1b70c9a61d801985e0bf20d1f17d49&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Model Painting</h1>
              <p>done by Undead</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://cdn.discordapp.com/attachments/368111643193901057/1218620372505591848/IMG_20240316_135940969.jpg?ex=66118e29&is=65ff1929&hm=3efc462c85de032c1be8c8f41a3c1ec73c0bef3d3c63fb916d5e9f4f72db7aed&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Random Squid Sketch</h1>
              <p>done by KingSquiddie</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://cdn.discordapp.com/attachments/368111643193901057/1205341425856675870/cool_dragon.jpg?ex=660f63ae&is=65fceeae&hm=b1f3c90086876496e7cea3cabf1772e5ca2c7478b5f4d85cfe98768b94092408&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Dragon with the roses</h1>
              <p>By MrsCrunch</p>
            </div>
          </div>

          <div
            className="gallery-item gallery-grid-row gallery-grid-col"
            tabindex="0"
          >
            <img
              className="gallery-grid-col-2 gallery-grid-row-2"
              src="https://cdn.discordapp.com/attachments/368111643193901057/1177081512223588413/20231122_184553.jpg?ex=660e1815&is=65fba315&hm=8262f2c67fceee54f4062db0a74cd6061a1cbd6ea7ec2c2da63d8ffdb0e38838&"
              alt=""
            ></img>
            <div className="overlay">
              <h1 className="art-title">Sunset Diamond Painting</h1>
              <p>By MrsCrunch</p>
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
