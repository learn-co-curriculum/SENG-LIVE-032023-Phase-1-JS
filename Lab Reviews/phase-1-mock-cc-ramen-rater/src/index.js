// write your code here
const baseUrl = 'http://localhost:3000/'
const ramenUrl = baseUrl + 'ramens/'

// When the page loads, request the data from the server to get all the ramen objects.
function fetchRamen () {
    fetch( ramenUrl )
    .then( r => r.json() )
    .then( ramenData => renderAllRamen( ramenData ) )

}

fetchRamen()

// display the image for each of the ramen using an img tag inside the #ramen-menu div.
function renderAllRamen( ramenData ) { 
    ramenData.forEach( ramen => renderRamenImage( ramen ) )
}

function renderRamenImage( ramen ) {
    
    const ramenMenuDiv = document.getElementById( 'ramen-menu' )

    const ramenImage = document.createElement( 'img' )
    ramenImage.src = ramen.image
    ramenMenuDiv.appendChild( ramenImage )
    
    // Click on an image from the #ramen-menu div and see all the info about that ramen inside the #ramen-detail div
    
    ramenImage.addEventListener( 'click', () => showRamenInfo( ramen ) )
    // ramenImage.onclick = ( ) => showRamenInfo( ramen )

}


function showRamenInfo ( ramen ) {
    
    const ramenDetailDiv = document.getElementById( 'ramen-detail' )
    
    const ramenDetailImage = document.getElementById( 'ramen-detail-image' )
    ramenDetailImage.src = ramen.image
    
    const ramenDetailName = document.getElementById( 'ramen-detail-name' )
    ramenDetailName.textContent = ramen.name
    
    const ramenDetailRestaurant = document.getElementById( 'ramen-detail-restaurant' )
    ramenDetailRestaurant.textContent = ramen.restaurant
    
    // update ramen-detail where it says insert comment here and insert rating here with ramen info

    const ramenDetailRating = document.getElementById( 'rating-display' )
    ramenDetailRating.textContent = ramen.rating
    
    const ramenDetailComment = document.getElementById( 'comment-display' )
    ramenDetailComment.textContent = ramen.comment
    
}

// Create a new ramen after submitting the new-ramen form. 
const newRamenForm = document.getElementById( 'new-ramen' )
newRamenForm.onsubmit = ( event ) => {

    event.preventDefault()

    const newRamen = {
        'name': newRamenForm.name.value,
        "restaurant": newRamenForm.restaurant.value,
        "image": newRamenForm.image.value,
        "rating": newRamenForm.rating.value,
        "comment": newRamenForm['new-comment'].value
    }

    debugger
    
    // The new ramen should be added to the#ramen-menu div.
    renderRamenImage( newRamen )

    newRamenForm.reset()
}


