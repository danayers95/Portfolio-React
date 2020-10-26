import React from "react";
import "./About.css";
import Me from '../assets/me.jpg';

function Home() {
  return (
    <div id="top" className="card">
      <h2 className="font-weight-bold text-center">Dan Ayers</h2>
      <div id="inner_card" className="card">
        <div>
          <div className="about">
            <img className="about_img" src={Me} alt="" />
          </div>
          <p>
            I'm a drummer, artist, and bar-tender looking to transition into web development! My first
            experience with web development was with the Full Stack Web Development Program at UNC Chapel Hill. 
          </p>
          <p>
            I spent the past 4 years touring around the country and around North Carolina with various bands, 
            while working in restaurants to pay the bills. I knew that the service industry wasn't for me, though, 
            and I've found that web development is something that I truly enjoy and have a passion for. 
          </p>
          <p>
            I'm a bit of a perfectionist, and I'm patient. These two qualities go hand-in-hand with web development
            in my opinion, and I've found that patience is an important skill to have when it comes to running into errors
            or needing to do some debugging. 

            Please take a look at my portfolio, and reach out to me if you have any questions!
          </p>
        </div>
      </div>
      <div className="badges">
        <a
          href="https://github.com/danglayers"
          className="fa fa-github"
        >Github</a>
        <a
          href="https://www.linkedin.com/in/dan-ayers-06a6481aa/"
          targer="_blank"
          className="fa fa-linkedin"
        >LinkedIn</a>
      </div>
    </div>
  );
}

export default Home;