import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import axios from "axios";

import API from './API';

class App extends React.Component {
	constructor(props) {
	  	super(props);
  		this.state = {
			isLoading: true,
			arr: []
	  	};
	}
  	render() {
		const { arr } = this.state;
		return arr.map(el => <p key={el.id}>{el.title}</p>);
	}

  	async componentDidMount() {
		let userData = await API.get('/api.php', {
			params: {}
		  });
		  const arr = userData.data;
		  console.log(arr);
		this.setState({
			...this.state, arr
		});
		}
  }

  export default App;

