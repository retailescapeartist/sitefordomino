// pages/ComputerSpecsPage.jsx
import React from 'react';
import './ComputerSpecsPage.css'

const ComputerSpecsPage = () => {
  return (
    <div className="center-content">
      <h1>Computer Specs</h1>
      <div className="computer-specs">
        <h2>New Rig (12/11/2017)</h2>
        <ul>
          <li>ASUS GeForce GTX 1080 8GB ROG STRIX</li>
          <li>ASUS ROG Crosshair VI Hero X370</li>
          <li>AMD Ryzen 7 1700 Processor with Wraith Spire LED Cooler</li>
          <li>CORSAIR Vengeance 32GB 3000</li>
          <li>WD Blue 250GB Internal SSD - SATA 6 Gb/s M.2</li>
          <li>Elgato Game Capture HD60 Pro</li>
          <li>Crucial MX300 525GB SATA SSD</li>
          <li>EVGA SuperNOVA 650 G3</li>
          <li>Seagate 2TB FireCuda Gaming SSHD</li>
        </ul>
        {/* ... other specs ... */}
      </div>
    </div>
  );
};

export default ComputerSpecsPage;
