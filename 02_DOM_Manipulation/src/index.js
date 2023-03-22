//BookStore has been moved to data.js 
console.log(bookStore);

// const inventory = [...bookStore.inventory]

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}


const storeName = document.getElementById('store-name')
storeName.textContent = 'Princeton & Thomas 🐺 Book Store'
storeName.style.color = '#880808'
store.style.fontFamily = 'monospace'


// [✅] Explain what the DOM is
// [✅] Traverse the DOM tree
// [✅] Select single DOM elements with .querySelector() and -getElementById()
// [✅] Select multiple elements with .querySelectorAll() and .-getElementsByClassName()
// [✅] Add content with .textContent
// [✅] Create elements with .createElement
// [✅] Append elements to the DOM with .appendChild and .append
// [✅] Explain the dangers of innerHTML and when it's safe to use
// [✅] Remove content with .remove



// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html structure for rendering 
// that book and insert it into our webpage!

// function renderBook(book) {
// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>

function renderBook( book ) {
  let bookList = document.getElementById('book-list')
  
  let li = document.createElement('li')
  bookList.appendChild( li )
  li.className = 'list-li'

  let bookTitle = document.createElement('h3')
  bookTitle.textContent = book.title
  li.appendChild( bookTitle )

  let author = document.createElement('p')
  author.textContent = book.author
  li.appendChild( author )

  let price = document.createElement('p')
  price.textContent = `${ formatPrice( book.price ) }`
  li.appendChild( price )

  let bookImage = document.createElement('img')
  bookImage.src = book.imageUrl
  li.appendChild( bookImage )

  let deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  li.appendChild( deleteButton )

}

bookStore.inventory.forEach( book => renderBook( book ) )

// Different way to iterate over the array and render all the books!!!

  // bookStore.inventory.map( book => renderBook( book ) )

  // bookStore.inventory.map( function ( book ) {
  //   renderBook( book )
  // })

  //  bookStore.inventory.map( renderBook )
