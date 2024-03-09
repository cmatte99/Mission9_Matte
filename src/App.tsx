import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json';

// Define the Team interface
interface Team {
  school: string;
  mascot: string;
  location: string;
}

// Component for displaying a welcome message
function Welcome() {
  return <h1>NCAA College Teams: March Madness</h1>;
}

// Component for displaying information about a single team
class TeamCard extends React.Component<Team> {
  render() {
    // Destructure the props
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

// Component for displaying a list of teams
function TeamList() {
  return (
    <div className="Team">
      {/* Map through the teams and render TeamCard for each */}
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

// Main App component
function App() {
  return (
    <div className="App">
      <>
        {/* Render the Welcome component */}
        <Welcome />
        {/* Render the TeamList component */}
        <TeamList />
      </>
    </div>
  );
}

export default App;
