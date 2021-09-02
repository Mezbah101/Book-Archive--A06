// Getting Search Text from user and Fetch data 
 
 const  searchBook= () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;

    if (!searchText) {

      document.getElementById("search-result-container").textContent = ""
      document.getElementById("info-show").textContent = ""
    
      const resultContainer = document.getElementById("search-result-container")

    const div =  document.createElement("div")
    div.classList.add("mx-auto")
    div.innerHTML = `<h5> Please Enter Text To Serach  </h5>`
    resultContainer.append(div)

    }
    
else {

  
  searchField.value ="";
  // console.log(searchText);
    fetch (`https://openlibrary.org/search.json?q=${searchText}`)
    .then(res => res.json())
    .then (data =>  displayBooks (data))

}
}


// ** Display Information **

const displayInfo = books => {

    const infoShow = document.getElementById("info-show")
    infoShow.textContent= ""
    const div = document.createElement ("div")
    div.classList.add("m-5")
    div.innerHTML =` <h5> Total Search Result Found ${books.numFound} </h5>`
    infoShow.append(div)

}


// ** Display Search Result **

const displayBooks = returnResults => {

  //Info Show Function called

    displayInfo(returnResults)

    //Accessing array from object
    const books = returnResults.docs

    const resultContainer = document.getElementById("search-result-container")
    resultContainer.textContent = "";

      if (books.length===0) {
        
        const div = document.createElement ("div") 
       div.classList.add("mx-auto")
        div.innerHTML = `<h5> No Result Found! </h5>` 
        resultContainer.appendChild(div)
      }


     else{
      
       
     books.forEach(book => {

      const div = document.createElement ("div")
      div.classList.add("col")
      div.innerHTML =
       `
      <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="card-title"> Book Name: ${book.title}</h6>
          <p class="card-text"> Author: ${book.author_name[0]}</p>
          <p> Publish Year: ${book.first_publish_year} </p>
        </div>`
        resultContainer.appendChild(div)   
       });

     }


     






}