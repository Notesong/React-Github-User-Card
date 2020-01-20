import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers';
import UserForm from './components/UserForm';

const user = 'notesong';

class App extends React.Component {
  
  state = {
    userName: user,
    userData: [],
    followerData: []
  };

  // fetch the data for the current user when the app starts
  componentDidMount() {
    this.getData();
  }

  // Checks to see if userName updated and does another fetch if it has
  // to get the new user's data
  componentDidUpdate(prevProps, prevState) {
    if(prevState.userName !== this.state.userName) {
      this.getData();
    }
  }

  // fetch the data from the API
  getData = () => {
    // basic user data
    fetch(`https://api.github.com/users/${this.state.userName}`)
    .then(res => res.json())
    .then(githubUserData => {
      this.setState({...this.state, userData: githubUserData})
    })
    .catch(err => console.log("Error on fetch: ", err))

    // user's followers
    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
    .then(res => res.json())
    .then(githubFollowerData => {
      this.setState({...this.state, followerData: githubFollowerData})
    })
    .catch(err => console.log("Error on fetch: ", err))
  }

  // sets the new user to state
  changeUser = newUser => {
    this.setState({...this.state, userName: newUser});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub Search</h1>
          <UserForm changeUser={this.changeUser} />
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
