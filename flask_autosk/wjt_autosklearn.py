import sys
import joblib
from NBA_Data_0605.get_data import get_data
import warnings
warnings.filterwarnings("ignore")

date = sys.argv[1]
team1 = sys.argv[2]
team2 = sys.argv[3]
data = get_data(date, team1, team2)
clf = joblib.load('./src/model_V2_player.joblib') 
X = data[['fg3m_rate_home', 'plus_minus_rate_home', 'ast_rate_home',
       'tov_dev_rate_home', 'fg3a_rate_home', 'fta_rate_home',
       'oreb_dev_rate_home', 'oreb_rate_home', 'fta_dev_rate_home',
       'blk_rate_home', 'ftm_dev_rate_home', 'reb_rate_home',
       'reb_dev_rate_home', 'fgm_rate_home', 'pts_rate_home', 'pf_rate_home',
       'fg3_pct_rate_home', 'pf_dev_rate_home', 'ast_dev_rate_home',
       'fg3a_dev_rate_home', 'fg3m_dev_rate_home', 'min_rate_home',
       'tov_rate_home', 'fgm_dev_rate_home', 'dreb_rate_home',
       'dreb_dev_rate_home', 'wl_rate_home', 'fg_pct_rate_home',
       'fg3_pct_dev_rate_home', 'fga_dev_rate_home', 'ftm_rate_home',
       'stl_rate_home', 'ft_pct_dev_rate_home', 'fga_rate_home',
       'ft_pct_rate_home', 'fg_pct_dev_rate_home', 'fg3m_rate_away',
       'plus_minus_rate_away', 'ast_rate_away', 'tov_dev_rate_away',
       'fg3a_rate_away', 'fta_rate_away', 'oreb_dev_rate_away',
       'oreb_rate_away', 'fta_dev_rate_away', 'blk_rate_away',
       'ftm_dev_rate_away', 'reb_rate_away', 'reb_dev_rate_away',
       'fgm_rate_away', 'pts_rate_away', 'pf_rate_away', 'fg3_pct_rate_away',
       'pf_dev_rate_away', 'ast_dev_rate_away', 'fg3a_dev_rate_away',
       'fg3m_dev_rate_away', 'min_rate_away', 'tov_rate_away',
       'fgm_dev_rate_away', 'dreb_rate_away', 'dreb_dev_rate_away',
       'wl_rate_away', 'fg_pct_rate_away', 'fg3_pct_dev_rate_away',
       'fga_dev_rate_away', 'ftm_rate_away', 'stl_rate_away',
       'ft_pct_dev_rate_away', 'fga_rate_away', 'ft_pct_rate_away',
       'fg_pct_dev_rate_away', 'MVP_in_roster_share_1yr_home',
       'MVP_in_roster_share_2yr_home', 'MVP_in_roster_share_3yr_home',
       'MVP_in_roster_share_1yr_away', 'MVP_in_roster_share_2yr_away',
       'MVP_in_roster_share_3yr_away', 'Team_all_stars_home',
       'Team_all_stars_away', 'All_nba_1st_team_players_1yr_home',
       'All_nba_1st_team_players_2yr_home',
       'All_nba_1st_team_players_3yr_home',
       'All_nba_1st_team_players_1yr_away',
       'All_nba_1st_team_players_2yr_away',
       'All_nba_1st_team_players_3yr_away',
       'All_nba_2nd_team_players_1yr_home',
       'All_nba_2nd_team_players_2yr_home',
       'All_nba_2nd_team_players_3yr_home',
       'All_nba_2nd_team_players_1yr_away',
       'All_nba_2nd_team_players_2yr_away',
       'All_nba_2nd_team_players_3yr_away',
       'All_nba_3rd_team_players_1yr_home',
       'All_nba_3rd_team_players_2yr_home',
       'All_nba_3rd_team_players_3yr_home',
       'All_nba_3rd_team_players_1yr_away',
       'All_nba_3rd_team_players_2yr_away',
       'All_nba_3rd_team_players_3yr_away']]

print(clf.predict(X)[0])
