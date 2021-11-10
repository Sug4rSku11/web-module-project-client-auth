import React from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

class Friends extends React.Component {
	state = {
		friends: []
	};

	componentDidMount() {
		axiosWithAuth()
			.get('http://localhost:5000/api/friends/')
			.then(resp => {
				this.setState({
					friends: resp.data
				});
				console.log(resp);
			})
			.catch(err => {
				console.log(err);
			})
	}
		render(){
			return (
				<div>
					<h2>Friends:</h2>
					{this.state.friends.length === 0 ? (
          				<p>Loading Data</p>): this.state.friends.map(friend => (
							<div>
								<h3>{friend.name}</h3>
								<p>Age:{friend.age}, email: { friend.email }</p>
							</div>)) }
				</div>
			)
		}
	}


export default Friends;