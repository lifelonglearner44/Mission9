import { useState, useEffect } from 'react';
// Import the JSON file with the basketball teams
import teamsData from './CollegeBasketballTeams.json';

// Define the types for the Team object and the props for the TeamCard and TeamList components
interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface TeamCardProps {
  team: Team;
}

interface TeamListProps {
  teams: Team[];
}

// #1: A heading section at the top
// introducing the user to what the site is.
function Header() {
  return (
    <header>
      <h1>March Madness College Basketball Teams</h1>
      <p>Welcome to our website showcasing NCAA basketball teams!</p>
    </header>
  );
}

// #2: A team “card” that contains the following information about each school:
// • School Name
// • Mascot Name
// • Location (City, State)
function TeamCard({ team }: TeamCardProps) {
  const { school, name, city, state } = team;
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '1rem',
  };
  return (
    <div className="card" style={cardStyle}>
      <h2 className="card-title">{school}</h2>
      <h5 className="card-subtitle mb-2 text-muted">Mascot: {name}</h5>
      <p className="card-text">
        Location: {city}, {state}
      </p>
    </div>
  );
}

// #3: A list of team cards that shows all the teams on the list.
function TeamList({ teams }: TeamListProps) {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '1rem',
  };
  return (
    <div className="team-list container">
      <h2>All Teams</h2>

      <div style={gridContainerStyle}>
        {teams.map((team) => (
          <TeamCard key={team.tid} team={team} />
        ))}
      </div>
    </div>
  );
}

// The App component that renders the Header and TeamList components.
function App() {
  //  Specify the type as an array of Team objects
  const [teams, setTeams] = useState<Team[]>(teamsData.teams);
  //  Set the state with the imported JSON data
  useEffect(() => {
    setTeams(teamsData.teams);
  }, []);

  return (
    <div className="App">
      <Header />
      <TeamList teams={teams} />
    </div>
  );
}

// Export the App component
export default App;
