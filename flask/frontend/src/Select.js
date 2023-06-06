import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ isHome, team, setTeam, anotherTeam }) {

  const handleChange = (event) => {
    if (anotherTeam !== event.target.value) {
      setTeam(event.target.value);
    }
  };

  const NBATeams = ['Atlanta Hawks',
    'Boston Celtics',
    'Brooklyn Nets',
    'Charlotte Hornets',
    'Chicago Bulls',
    'Cleveland Cavaliers',
    'Dallas Mavericks',
    'Denver Nuggets',
    'Detroit Pistons',
    'Golden State Warriors',
    'Houston Rockets',
    'Indiana Pacers',
    'Los Angeles Clippers',
    'Los Angeles Lakers',
    'Memphis Grizzlies',
    'Miami Heat',
    'Milwaukee Bucks',
    'Minnesota Timberwolves',
    'New Orleans Pelicans',
    'New York Knicks',
    'Oklahoma City Thunder',
    'Orlando Magic',
    'Philadelphia 76ers',
    'Phoenix Suns',
    'Portland Trail Blazers',
    'Sacramento Kings',
    'San Antonio Spurs',
    'Toronto Raptors',
    'Utah Jazz',
    'Washington Wizards']

  return (
    <Box sx={{ minWidth: '200px', marginLeft: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{isHome ? "主隊" : "客隊"}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={team}
          label="Team"
          onChange={handleChange}
        >
          {NBATeams.map((team) => {
            if (team !== anotherTeam)
              return (<MenuItem key={team} value={team}>{team}</MenuItem>)
            return null
          })}
        </Select>
      </FormControl>
    </Box>
  );
}