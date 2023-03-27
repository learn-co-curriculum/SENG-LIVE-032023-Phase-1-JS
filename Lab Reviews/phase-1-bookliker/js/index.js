// When the page loads, get a list of books from http://localhost:3000/books 
const baseUrl = "http://localhost:3000/"
const booksUrl = baseUrl + 'books/'
const usersUrl = baseUrl + 'users/'

let users = []

function fetchBooks () {
    fetch( booksUrl )
    .then( response => response.json() )
    .then( booksData => renderBooks( booksData ) )
}

function fetchUsers () {
    fetch( usersUrl )
    .then( response => response.json() )
    .then( usersData => {
        users = [...usersData] 
        console.log( users )
    })
}


fetchBooks()
fetchUsers()


const renderBooks = ( books ) => {
    books.forEach( book => renderBookLi( book ) )
    // books.forEach( renderBookLi )
}

// display their titles by creating a li for each book and adding each li to the ul#list element.
const renderBookLi = book => {
    const listUl = document.getElementById( 'list' )
    
    const bookLi = document.createElement( 'li' )
    listUl.appendChild( bookLi )
    bookLi.textContent = book.title

    bookLi.onclick = ( ) => showBookInformation( book )
}


function clearHTMLElement ( element ) {
    while ( element.firstChild )
        element.firstChild.remove()
}

// When a user clicks the title of a book, show book information in div#show-panel
function showBookInformation ( book ) {
    const showPanelDiv = document.getElementById( 'show-panel' )
    // showPanelDiv.innerHTML = ''
    clearHTMLElement( showPanelDiv )

    const titleH1 = document.createElement( 'h1' )
    showPanelDiv.appendChild( titleH1 )
    titleH1.textContent = book.title

    
    let bookImage = document.createElement( 'img' )
    showPanelDiv.appendChild( bookImage )
    bookImage.src = book.img_url


    if ( book.subtitle ) {
        let bookSubtitleH3 = document.createElement( 'h3' )
        showPanelDiv.appendChild( bookSubtitleH3 )
        bookSubtitleH3.textContent = book.subtitle
    }


    let bookAuthorH4 = document.createElement( 'h4' )
    showPanelDiv.appendChild( bookAuthorH4 )
    bookAuthorH4.textContent = 'By: ' + book.author

    
    let bookDescP = document.createElement( 'p' )
    showPanelDiv.appendChild( bookDescP )
    bookDescP.textContent = book.description


    let userUl = document.createElement( 'ul' )
    showPanelDiv.appendChild( userUl )

    book.users.forEach( user => renderUserLi( user, userUl ) )

    let br = document.createElement( 'br' )
    showPanelDiv.appendChild( br )


    //Display a LIKE button along with the book details. 
    let likeButton = document.createElement( 'button' )
    showPanelDiv.appendChild( likeButton )
    likeButton.textContent = "Like 💖"

    // add event listener to like button
    likeButton.onclick = ( event ) => clickToLikeBook( book ) 
}


function renderUserLi( user, userUl ) {

    let userLi = document.createElement( 'li' )
    userUl.appendChild( userLi )
    userLi.textContent = user.username

}


// A user can like a book by clicking on the Like button, then send a PATCH request to http://localhost:3000/books/:id with an array of users who like the book, and add a new user to the list.
const clickToLikeBook = ( book ) => {

    let currentUser = users.find( user => user.id === 11 )
    let userAlreadyLIkesBook = book.users.find( user => user.id === currentUser.id )

    if ( currentUser && userAlreadyLIkesBook === undefined ) {

        let updatedUsersForBook = [...book.users, currentUser]
        
        let updatedBook = {... book, users: updatedUsersForBook }

        let postRequest = {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify( updatedBook )
        }


        fetch( booksUrl + book.id, postRequest )
        .then( response => response.json() )
        .then( updatedBookData => showBookInformation( updatedBookData ) )
    }
}