import "./SchedulePage.css";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SchedulePage = () => {
  return (
    <section>
      <Navbar />
      <div className="app-container">
        <h1>Schedule</h1>
        <p>On these days, I will try to start at 2 EDT (UTC - 4).</p>

        <p>
          Thank you for your patience. I want to stream more, but fear of pain
          keeps holding me back. And the hiccups. The FRACKIN HICCUPS!!!! lol.
          (diaphragm is also a muscle which can spasm)
        </p>
        <div className="schedule">
          <div>
            <h1>Sunday</h1>
            <p>Stream Time: OFF</p>
          </div>
          <div>
            <h1>Monday</h1>
            <p>Stream Time: 2:00pm EST</p>
          </div>
          <div>
            <h1>Tuesday</h1>
            <p>Stream Time: 2:00pm EST</p>
          </div>
          <div>
            <h1>Wednesday</h1>
            <p>Stream Time: 2:00pm EST</p>
          </div>
          <div>
            <h1>Thursday</h1>
            <p>Stream Time: OFF</p>
          </div>
          <div>
            <h1>Friday</h1>
            <p>Stream Time: 2:00pm EST</p>
          </div>
          <div className="saturday">
            <h1>Saturday</h1>
            <p>Stream Time: 2:00pm EST</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SchedulePage;
