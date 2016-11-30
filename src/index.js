import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyADVQPK-KG26CR1kFfq-Ak12ZXbMY0VzwQ';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });


  }
  alertMessage(text) {
    alert(text);
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <div onClick={() => this.alertMessage('button div')}>button</div>
        <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('.container'));
