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

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.userName !== this.state.userName) {
      this.getData();
    }
  }

  getData = () => {
    fetch(`https://api.github.com/users/${this.state.userName}`)
    .then(res => res.json())
    .then(githubUserData => {
      this.setState({...this.state, userData: githubUserData})
      console.log(this.state.userData)
    })
    .catch(err => console.log("Error on fetch: ", err))

    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
    .then(res => res.json())
    .then(githubFollowerData => {
      this.setState({...this.state, followerData: githubFollowerData})
      console.log(this.state.followerData)
    })
    .catch(err => console.log("Error on fetch: ", err))
  }

  changeUser = newUser => {
    this.setState({...this.state, userName: newUser});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Search</h1>
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
