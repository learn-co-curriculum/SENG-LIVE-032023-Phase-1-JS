const resultsDiv = document.querySelector('#results');


document.addEventListener('DOMContentLoaded', () => {
  const apiSearchForm = document.querySelector('#api-Search');
  
  apiSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = encodeURI(e.target.search.value);
    console.log(query);
    
    // hitUpTVMazeAPI( query )
    
    hitUpSpoonacularAPI( query )
    
    
  })
})


function hitUpTVMazeAPI ( query ) {
  const tvMazeAPIUrl = `https://api.tvmaze.com/search/shows?q=${query}`

  fetch( tvMazeAPIUrl )
  .then( r => r.json() )
  .then( console.log )
}

function hitUpSpoonacularAPI ( query ) {

  const spoonacularAPIUrl = `https://api.spoonacular.com/recipes/${query}/information?apiKey=${apiKey}&includeNutrition=true`

  fetch( spoonacularAPIUrl )
  .then( r => r.json() )
  .then( console.log )
}