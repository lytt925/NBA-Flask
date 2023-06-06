import { useState } from 'react';
import './App.css'
import { predict } from './axios'
import Select from './Select'
import Model from './ModelSelect';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const nbaTeams = {
  "ATL": "Atlanta Hawks",
  "BOS": "Boston Celtics",
  "BKN": "Brooklyn Nets",
  "CHA": "Charlotte Hornets",
  "CHI": "Chicago Bulls",
  "CLE": "Cleveland Cavaliers",
  "DAL": "Dallas Mavericks",
  "DEN": "Denver Nuggets",
  "DET": "Detroit Pistons",
  "GSW": "Golden State Warriors",
  "HOU": "Houston Rockets",
  "IND": "Indiana Pacers",
  "LAC": "Los Angeles Clippers",
  "LAL": "Los Angeles Lakers",
  "MEM": "Memphis Grizzlies",
  "MIA": "Miami Heat",
  "MIL": "Milwaukee Bucks",
  "MIN": "Minnesota Timberwolves",
  "NOP": "New Orleans Pelicans",
  "NYK": "New York Knicks",
  "OKC": "Oklahoma City Thunder",
  "ORL": "Orlando Magic",
  "PHI": "Philadelphia 76ers",
  "PHX": "Phoenix Suns",
  "POR": "Portland Trail Blazers",
  "SAC": "Sacramento Kings",
  "SAS": "San Antonio Spurs",
  "TOR": "Toronto Raptors",
  "UTA": "Utah Jazz",
  "WAS": "Washington Wizards"
}


const App = () => {
  const [prediction, setPrediction] = useState('')
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [model, setModel] = useState('TPOT');
  const [wait, setWait] = useState(false)
  const [date, setDate] = useState(dayjs('2023-03-12'));

  async function handlePredict() {
    console.log('predict!!')
    setWait(true)
    const { winTeam } = await predict(date.format('YYYY-MM-DD'), team1, team2, model)
    if (winTeam !== null) {
      const response = `The predicted winner is ${nbaTeams[winTeam]}.`
      setPrediction(response)
      setWait(false)
    } else {
      console.log('something wrong')
    }
  }

  return (
    <div className='Main'>
      <div className='Date'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="比賽日期"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            minDate={dayjs('1991-01-01')}
            maxDate={dayjs('2023-03-12')}
          />
        </LocalizationProvider>
        <Model model={model} setModel={setModel} />
      </div>
      <div className="Choice">
        <Select isHome={true} team={team1} setTeam={setTeam1} anotherTeam={team2} />
        <Select isHome={false} team={team2} setTeam={setTeam2} anotherTeam={team1} />
        <Button id='Predict' variant="contained" sx={{ marginLeft: '20px' }} onClick={handlePredict} disabled={!(team1 && team2)}>
          Predict
        </Button>
      </div>
      <div className='result'>
        {wait ?
          <Box sx={{ marginTop: '20px' }}>
            <CircularProgress />
          </Box>
          :
          <h2 id='prediction'>{prediction}</h2>}
      </div>
    </div>

  )
}


export default App