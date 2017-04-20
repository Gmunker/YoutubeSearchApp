import React from 'react';

var Nav = (props) => {
const courseLink = "https://www.udemy.com/react-redux/learn/v4/content"

    return(
      <div className="Navbar top-bar">
        <h1><a href="{courseLink}" target="_blank">Modern React and Redux</a> | Youtube Player</h1>
            <div className="credits">
              <h2>Created by: </h2>
              <h2>Greg Munker</h2>
              <h2><a className="github-link" href="https://github.com/Gmunker/ReactMarkdown">(GitHub Repo)</a></h2>
              <div className="social-buttons expanded button-group">
                  <a className="button secondary" href="http://www.facebook.com/gmunker" target="_blank">Facebook</a>
                  <a className="button secondary" href="https://plus.google.com/u/0/+GregMunker" target="_blank">Google+</a>
                  <a className="button secondary" href="https://github.com/Gmunker" target="_blank">Github</a>
                  <a className="button secondary" href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank">LinkedIn</a>
                  <a className="button secondary" href="https://twitter.com/Gmunker" target="_blank">Twitter</a>
              </div>
            </div>
      </div>
    )
  
  };

export default Nav;