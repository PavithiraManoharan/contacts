import React, { Component } from 'react';

const contacts = [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@reacttraining.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@reacttraining.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
]


class User extends React.Component {
  render() {
    return (
      <div>
        <p>Username: {this.props.username}</p>
        <p>Friend status: {this.props.friend}</p>
      </div>
    )
  }
}

class App extends Component {
  render() {

    return (
      <User username='Tyler' friend='true'/>
    )
  }
}

export default App;
