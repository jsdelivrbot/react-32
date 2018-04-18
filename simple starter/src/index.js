import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
const API_KEY = 'AIzaSyA1JTXJntPh3jXdSWh5hv-10wlW8XusEQI';



// Create a new component.
// This component should produce some HTML
class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			// this.setState({ videos: videos}) is equivalent to this ES6 refractor
			this.setState({ videos });
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
