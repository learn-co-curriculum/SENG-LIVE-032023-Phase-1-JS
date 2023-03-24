function game_hash () {
  return {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 11,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        {
          player_name: "Bismack Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slam_dunks: 10
        },
        {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        {
          player_name: "Kemba Walker",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 7,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
}

function allPlayers () {
    return game_hash().home.players.concat( game_hash().away.players )
}

const getTeamInfoByTeamName = teamName => {
  if ( game_hash().home.team_name === teamName )
    return game_hash().home
  else return game_hash().away
}

const getPlayerByName = name => allPlayers().find( player => player.player_name === name )

function numPointsScored ( playerName ) {
    return getPlayerByName( playerName ).points
}

const shoeSize = playerName => getPlayerByName( playerName ).shoe

function teamColors ( teamName ) {
  return getTeamInfoByTeamName( teamName ).colors
}

const teamNames = ( ) => [ game_hash().home.team_name, game_hash().away.team_name ]

function playerNumbers ( teamName ) {
  return getTeamInfoByTeamName( teamName ).players.map( player => player.number )
}

const playerStats = playerName => {
  let player = getPlayerByName( playerName )
  let showPlayerStats = {}
  for ( let key in player )
    if ( key !== 'player_name' )
      showPlayerStats[key] = player[key]
  
  return showPlayerStats
}

function bigShoeRebounds () {
  return allPlayers().sort( ( player1, player2 ) => player2.shoe - player1.shoe )[0].rebounds
}

const mostPointsScored = ( ) => allPlayers().sort( ( player1, player2 ) => player2.points - player1.points )[0]

function playerWithLongestName () {
  return allPlayers().sort( ( player1, player2 ) => player2.player_name.length - player1.player_name.length )[0]
}

const doesLongNameStealATon = ( ) => {
  let playerMostSteals = allPlayers().sort( ( player1, player2 ) => player2.steals - player1.steals )[0]
  return playerMostSteals.player_name === playerWithLongestName().player_name
}