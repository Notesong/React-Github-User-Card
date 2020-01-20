import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends React.Component {
  
  state = {
    userData: [],
    followerData: []
  };

  componentDidMount() {
    fetch('https://api.github.com/users/notesong')
    .then(res => res.json())
    .then(githubUserData => {
      this.setState({...this.state, userData: githubUserData})
      console.log(this.state.userData)
    })
    .catch(err => console.log("Error on fetch: ", err))

    fetch('https://api.github.com/users/notesong/followers')
    .then(res => res.json())
    .then(githubFollowerData => {
      this.setState({...this.state, followerData: githubFollowerData})
      console.log(this.state.followerData)
    })
    .catch(err => console.log("Error on fetch: ", err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github User Card</h1>
        </header>
        <section>
          <UserCard userData={this.state.userData} />
          <Followers followerData={this.state.followerData} />
        </section>
      </div>
    );    
  }
}

export default App;
