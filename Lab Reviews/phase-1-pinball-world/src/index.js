// ✅ Step 1 - fetch my data from somewhere ( usually the server )
// Step 2 - render data to the page
// Step 3 - add event listeners to the page
// Step 4 - make event listeners manipulate the page
// Step 5 - save changes to wherever data came from ( usually from server )




// Make a request to http://localhost:3000/games 
const baseUrl = `http://localhost:3000/`
const gamesUrl = baseUrl + 'games/'

const fetchGames = ( ) => 
    fetch( gamesUrl )
    .then( r => r.json() )
    .then( gamesData => renderGames( gamesData ) )

fetchGames()


// add the names of all the games in the #game-list nav element. For example, Ghostbusters (Stern).
const renderGames = games => {

    renderGameDetails( games[0] )

    const gameListNav = document.getElementById( 'game-list' )

    games.forEach( game => {

        const gameNameH5 = document.createElement( 'h5' )
        gameListNav.appendChild( gameNameH5 )

        gameNameH5.textContent = `${ game.name } ( ${ game.manufacturer_name } )`

        // When the user clicks on one of the games in the list, display all the details of that game.
        gameNameH5.onclick = ( ) => {
            renderGameDetails( game )
        }

    })
}

// When the page loads show the information for the first game in the array from the fetch ( show the image, name, and high_score properties )
const renderGameDetails = game => {

    console.log( game )

    const gameDetailsImage = document.getElementById( "detail-image" )
    gameDetailsImage.src = game.image

    const gameTitleH2 = document.getElementById( 'detail-title' )
    gameTitleH2.textContent = game.name

    const gameHighScoreSpan = document.getElementById( 'detail-high-score' )
    gameHighScoreSpan.textContent = game.high_score
    
    
    // The user should be able to enter a high score in the form on the right side and have it show that value for "high score". should save state when switching between games
    const highScoreForm = document.getElementById( "high-score-form" )

    highScoreForm.onsubmit = ( event ) => {
        event.preventDefault()
        const scoreInput = parseInt( document.getElementById( 'score-input' ).value )
        
        game.high_score = scoreInput
        
        const patchRequest = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify( game )
        }

        fetch( gamesUrl + game.id, patchRequest )
        .then( r => r.json() )
        .then( updatedGame => gameHighScoreSpan.textContent = updatedGame.high_score )


        highScoreForm.reset()
    }
    
    // highScoreForm.addEventListener( 'submit', function ( event ) {
    //     event.preventDefault()
    // })
}


    