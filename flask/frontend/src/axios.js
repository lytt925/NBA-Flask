import axios from 'axios'

let baseURL
if (process.env.NODE_ENV === 'production') {
  baseURL = '/api/nbapred'
} else {
  baseURL = '/api/nbapred'
}

const instance = axios.create
  ({ baseURL: baseURL })

const pynode = axios.create
  ({ baseURL: "http://localhost:5002/api/nbapred" })

// const pynode = axios.create
// ({ baseURL: "http://localhost:4000/api/nbapred" })

const nbaTeams = {
  "Atlanta Hawks": "ATL",
  "Boston Celtics": "BOS",
  "Brooklyn Nets": "BKN",
  "Charlotte Hornets": "CHA",
  "Chicago Bulls": "CHI",
  "Cleveland Cavaliers": "CLE",
  "Dallas Mavericks": "DAL",
  "Denver Nuggets": "DEN",
  "Detroit Pistons": "DET",
  "Golden State Warriors": "GSW",
  "Houston Rockets": "HOU",
  "Indiana Pacers": "IND",
  "Los Angeles Clippers": "LAC",
  "Los Angeles Lakers": "LAL",
  "Memphis Grizzlies": "MEM",
  "Miami Heat": "MIA",
  "Milwaukee Bucks": "MIL",
  "Minnesota Timberwolves": "MIN",
  "New Orleans Pelicans": "NOP",
  "New York Knicks": "NYK",
  "Oklahoma City Thunder": "OKC",
  "Orlando Magic": "ORL",
  "Philadelphia 76ers": "PHI",
  "Phoenix Suns": "PHX",
  "Portland Trail Blazers": "POR",
  "Sacramento Kings": "SAC",
  "San Antonio Spurs": "SAS",
  "Toronto Raptors": "TOR",
  "Utah Jazz": "UTA",
  "Washington Wizards": "WAS"
};


const predict = async (date, team1, team2, model) => {
  try {
    console.log(nbaTeams[team1], nbaTeams[team2])
    console.log(date)
    if (model !== 'Auto-Sklearn') {
      const { data } = await instance.get
        ('/', { params: { date, team1: nbaTeams[team1], team2: nbaTeams[team2], model: model } })
      console.log('axios', { winTeam: data.winTeam })
      return { winTeam: data.winTeam }
    } else {
      const { data } = await axios.get
        ('http://localhost:5002/api/nbapred', { params: { date, team1: nbaTeams[team1], team2: nbaTeams[team2], model: model } })
      console.log('axios to nodeserver', { winTeam: data })
      return { winTeam: data.winTeam }
    }
  }
  catch (e) {
    let msg
    if (e.code === 'ERR_NETWORK') {
      msg = 'Server is not responding'
    }
    return msg
  }
}


export { predict }