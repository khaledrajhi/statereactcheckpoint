import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initializing state
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate software developer.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg/1200px-John_Doe%2C_born_John_Nommensen_Duchac.jpg', // Example image URL
        profession: 'Software Engineer',
      },
      shows: false, // State to toggle the profile visibility
      timeElapsed: 0, // Time interval state
    };
    this.timer = null; // Store the timer reference
  }

  // Start the timer when the component mounts
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000); // Update the time every second
  }

  // Clean up the timer when the component unmounts
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Toggle the "shows" state to show/hide the profile
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profile Toggle</h1>

        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={imgSrc} alt="Profile" style={{width: "50%" , height: "auto"}} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p><strong>Profession:</strong> {profession}</p>
          </div>
        )}

        <div className="timer">
          <p>Time since component was mounted: {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;