import React from "react";
import "./Portfolio.css";
import ArtistSavor from '../assets/ArtistSavor.png';
import ArtViaMusic from '../assets/ArtViaMusic-thumbnail.jpg';
import NoteTaker from '../assets/NoteTaker.png';
import ReadmeGen from '../assets/ReadmeGen.png';
import TeamPortfolio from '../assets/TeamPortfolio.png';


function Portfolio() {
  return (
    <div id="top" className="card">
      <div className="card-body">
        <h1 className="font-weight-bold text-center">Portfolio</h1>
        <br />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card project">
              <div className="card_title">
                <h3>Artist Savor</h3>
                <div className="card_links">
                  <a
                    href="https://github.com/danglayers/Artist-Savor"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src={ArtistSavor} alt="" />
            </div>
            <div className="card project">
              <div className="card_title">
                <h3>Art Via Music</h3>
                <div className="card_links">
                  <a
                    href="https://s-suresh-kumar.github.io/ArtViaMusic/"
                    target="_blank"
                  >
                    <h6>Live</h6>
                  </a>
                  <a
                    href="https://github.com/danglayers/ArtViaMusic"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src={ArtViaMusic} alt="" />
            </div>
            <div className="card project">
              <div className="card_title">
                <h3>README Generator</h3>
                <div className="card_links">
                  <a
                    href="https://github.com/danglayers/README-Generator"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src={ReadmeGen} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card project">
              <div className="card_title">
                <h3>Note Taker</h3>
                <div className="card_links">
                  <a
                    href="https://shielded-harbor-35021.herokuapp.com/"
                    target="_blank"
                  >
                    <h6>Live</h6>
                  </a>
                  <a
                    href="https://github.com/danglayers/Note-Taker-Application/"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src={NoteTaker} alt="" />
            </div>
            <div className="card project">
              <div className="card_title">
                <h3>Team Portfolio</h3>
                <div className="card_links">
                  <a
                    href="https://github.com/danglayers/Team-Portfolio--HW"
                    target="_blank"
                  >
                    <h6>Repo</h6>
                  </a>
                </div>
              </div>
              <img src={TeamPortfolio} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;