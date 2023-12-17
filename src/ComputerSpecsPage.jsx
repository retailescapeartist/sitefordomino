import React from "react";
import "./ComputerSpecsPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ComputerSpecsPage = () => {
  return (
    <section>
      <Navbar />
      <div className="center-content">
        <h1>Computer Specs</h1>
        <div className="computer-specs">
          <div className="specs-list">
            <h2>New Rig (12/11/2017)</h2>
            <ul className="new-rig">
              <li>GIGABYTE GeForce RTX 3070 Gaming OC 8G</li>
              <li>ASUS ROG Crosshair VI Hero X370</li>
              <li>
                AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor
              </li>
              <li>Corsair H100x RGB Elite Liquid CPU Cooler For Desktop</li>
              <li>CORSAIR Vengeance 32GB 3000</li>
              <li>SABRENT Rocket Q 1TB NVMe PCIe M.2</li>
              <li>Elgato Game Capture HD60 Pro</li>
              <li>Thermaltake Toughpower GF1 850W 80+ Gold</li>
              <li>Audio-Technica ATH-AD700X Audiophile Open-Air Headphones</li>
              <li>Logitech G Pro Wireless Gaming Mouse</li>
              <li>Blue Yeti Condenser USB microphone</li>
              <li>Logitech G910 Orion Spark Mechanical Keyboard</li>
            </ul>
          </div>
          <div className="specs-list">
            <h2>Retired or I also use:</h2>
            <ul className="also-use">
              <li>Sennheiser HD 579 Open Back Headphones</li>
              <li>Logitech Wireless Gaming Headset G933</li>
              <li>Razer Naga Epic Chroma Gaming Mouse</li>
              <li>Logitech G710+ Mechanical Gaming Keyboard</li>
              <li>Logitech g602 Gaming Mouse</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ComputerSpecsPage;
