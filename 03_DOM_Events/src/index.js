const bookList = document.querySelector('#book-list');
function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

//////////////////////////////////////
// render functions  (Data => Display)
//////////////////////////////////////

// create a function renderHeader() that takes the store name from bookStore and adds to the DOM
function renderHeader(bookStore) {
  document.querySelector('#store-name').textContent = bookStore.name;
}

function renderFooter(bookStore) {
  document.querySelector('#location').textContent = bookStore.location;
  document.querySelector('#number').textContent = bookStore.number;
  document.querySelector('#address').textContent = bookStore.address;
  document.querySelector('#hours').textContent = bookStore.hours;
}

// function: renderBook(book)
// --------------------------
// accepts a book object as an argument and creates
// an li something like this:
// <li class="list-li">
//   <h3>Eloquent JavaScript</h3>
//   <p>Marjin Haverbeke</p>
//   <p>$10.00</p>
//   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
// </li>
// appends the li to the ul#book-list in the DOM
function renderBook(book) {
    
  const li = document.createElement('li');
  li.className = 'list-li';
  
  const h3 = document.createElement('h3');
  h3.textContent = book.title;
  li.append(h3);

  const pAuthor = document.createElement('p');
  pAuthor.textContent = book.author;
  li.append(pAuthor);
  
  const pPrice = document.createElement('p');
  pPrice.textContent = formatPrice(book.price);
  li.append(pPrice);
  
  const img = document.createElement('img');
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`;
  img.title = `${book.title} cover`;
  li.append(img);

  const btn = document.createElement('button');
  btn.textContent = 'Delete';

  btn.addEventListener('click', () => li.remove())

  li.append(btn);



  bookList.append(li);
}


////////////////////////////////////////////
// call render functions to populate the DOM
////////////////////////////////////////////

renderHeader(bookStore);
renderFooter(bookStore);
bookStore.inventory.forEach(renderBook);

const bookForm = document.querySelector('#book-form')
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let book = {
    title : bookForm.title.value,
    author : bookForm.author.value,
    price : bookForm.price.value,
    inventory: bookForm.inventory.value,
    imageUrl: bookForm.imageUrl.value
  }

  renderBook(book)
});

//Requirements
// Users should be able to click the Hide Book 
// Form button to hide the form to add a new book
// show the New Book form by clicking the button again

//Psuedocode:

//Show or hide the form
function toggleFormView() {

  //Get the form
  const form = document.querySelector("#book-form")
  //Get the button
  const button = document.querySelector("#toggleForm")

  //check if form is hidden
  if (form.style.display === "none") {
    //it was hidden, let's show it.
    form.style.display = "block";
    
    //change the button to "hide"
     button.textContent = "Hide Book Form"
  } else {
    //it was shown, lets hide it.
    form.style.display = "none";

    //change the button to "show"
    button.textContent = "Show Book Form"
  }  
}

// Find the button (using query selector)
const hideButton = document.querySelector('#toggleForm')

// Add an on click event listener to the button
hideButton.addEventListener('click', toggleFormView)


// This event listener should hide or show the form.
// hide / show -> toggleView

//Bonus: Users should be able to
// hide the Book From by pressing the Escape key 
// while it is visible.

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.key == "escape") {

    // So the user just pressed escape! what do i do now!?
    //Get the form
    const form = document.querySelector("#book-form")
    //Get the button
    const button = document.querySelector("#toggleForm")

    if (form.style.display !== "none") {
      //it was shown, lets hide it.
      form.style.display = "none";

      //change the button to "show"
      button.textContent = "Show Book Form"
    }  
  }
}
