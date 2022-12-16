function connect (){
    var searchText= document.getElementById('search').value ;
    var result= document.getElementById('quantity').value;
 
    var url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
    .then(res=>res.json())
    .then(data=> ShowData (data));
    document.getElementById('search').value= "";
    document.getElementById('quantity').value="";
}
function ShowData(data){
    console.log("data from show data function", data);

    var oldcontent= document.getElementById('container');
    oldcontent.textContent="";
   

    for ( var i=0; i<data.meals.length; i++){
        console.log(data.meals[i]);

        var newDiv = document.createElement('div');
        newDiv.innerHTML= `<div class="card" style="width: 18rem;">
        <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="title-style">${data.meals[i].strMeal} >Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Order now</a>
        </div>
      </div>`

        oldcontent.appendChild(newDiv);
    }

}