import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import NavBar from './components/nav.js';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const container = document.querySelector('.container');
const API_KEY = "AIzaSyAQP3PtuxbDn0c9dFlxlO6bY-Di4TRjg3k";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      term: 'surfboards',
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('skateboarding');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({ 
        videos, 
        selectedVideo: videos[0] })
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 600);

    return (
      <div>
      <NavBar />
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            videos={this.state.videos} 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})} /> 
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, container)