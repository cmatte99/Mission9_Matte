import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json';

interface Team {
  school: string;
  mascot: string;
  location: string;
}

function Welcome() {
  return <h1>NCAA College Teams on March Madness</h1>;
}

class TeamCard extends React.Component<Team> {
  render() {
    const { school, mascot, location } = this.props;
    return (
      <div>
        <h2>{school}</h2>
        <p>Mascot: {mascot}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="Team">
      {teamData.teams.map((team: any, index: number) => (
        <TeamCard
          key={index}
          school={team.school}
          mascot={team.name}
          // Corrected the template string syntax
          location={`${team.city}, ${team.state}`}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <>
        <Welcome />
        <TeamList />
      </>
    </div>
  );
}

export default App;
