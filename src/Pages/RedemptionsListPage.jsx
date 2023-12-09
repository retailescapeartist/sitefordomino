import React from "react";
import "./RedemptionsListPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TwitchRedemptionsListPage = () => {
  return (
    <section>
      <Navbar />
      <div className="twitch-redemptions-container">
        <h1 className="page-title">Twitch Redemptions</h1>
        <p className="description">
          !sfx for a list of alerts, scarier ones are sub only
          <br />
          <br />
          !quote add, !quote, !fact (for a random interesting fact!), !ethics,
          !uplay, !switch, !steam
          <br />
          <br />
          Subscriber Commands: !no, !burn, !scary, !laugh1, !goofy, !scream1,
          !scream2, !ermey, !chaos, !saber, !iseeyou, !chain, !space, !growly,
          !exterminate, !snarl, !dance, !mercy, !cat, !zombie, !newt, !tequila,
          !sacred, !scratch
          <br />
          <br />
          Subs get their own sounds!
          <br />
          <br />
          Follower sound alert cooldowns are 60 min, Sub sounds are 30 min.
          Except Rex, and she knows why! If you spam the alerts, they don't
          scare me!
          <br />
          <br />
          All bits get an alert, but bits 5-100 are one scare alert, one for
          101-500, and 500+
        </p>
      </div>
      <Footer />
    </section>
  );
};

export default TwitchRedemptionsListPage;
