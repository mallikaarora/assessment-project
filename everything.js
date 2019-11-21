function fetchData(){
xhr= new XMLHttpRequest();
var data;
xhr.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      data=JSON.parse(this.responseText);
      viewData(data);
  }
};
xhr.open("GET","https://newsapi.org/v2/everything?q=bitcoin&apiKey=05ee84ea984f4ca9a011aec9c7cc5f7e");

xhr.send();
}


function viewData(data)
{
  console.log(data);
  for(var i=0;i<data.articles.length;i++)
  {
    $("#1").append(
      `<div class='col-10 offset-1 mb-3'>
            <div class="card" style="height:50rem">
            <img src=${data.articles[i].urlToImage} class="card-img-top" style="height:40rem">
                    <div class="card-body">
                        <h4>${data.articles[i].title}</h4>
                        <h6 class="card-subtitle">Source : ${data.articles[i].source.name}</h2>
                        <hr>                        
                        <a href=${data.articles[i].url} class="btn btn-danger">Read Full News</a>
                    </div>
                </div>
            </div>
        </div>
      `)
  }
}