// function fetchData(){

// 	xhr= new XMLHttpRequest();
// xhr.open("GET","https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=05ee84ea984f4ca9a011aec9c7cc5f7e");
// xhr.send();
// var data;
// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      data=JSON.parse(this.responseText);
//      console.log(data.articles[0].title);

//      for(i=0;i<data.articles.length;i++)
// 	    	{
// 	    var a=document.createElement("div");
// 	    var name=  document.createElement("li");
// 	    name.innerHTML=data.articles[i].publishedAt;
// 	    var id=  document.createElement("li");
// 	    id.innerHTML=data.articles[i].title;
// 	    var id1=document.createElement("li");
// 	    id1.innerHTML=data.articles[i].author;
// 	        var id3=document.createElement("li");
// 	    id3.innerHTML=data.articles[i].url;
// 	     a.appendChild(name);
// 	     a.appendChild(id);
// 	     a.appendChild(id1);
// 	     a.appendChild(id3);
//            document.getElementById("resDetails").appendChild(a);

           
//        }
// 	}
// };

// }
function fetchData(){
	xhr= new XMLHttpRequest();
	var data;
	xhr.onreadystatechange = function() 
	{
   		if (this.readyState == 4 && this.status == 200) 
   		{
   			data=JSON.parse(this.responseText);
   			viewData(data);
   		}
   	};
   	xhr.open("GET","https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=05ee84ea984f4ca9a011aec9c7cc5f7e");

xhr.send();
}

function viewData(data)
{
	console.log(data);
	for(var i=0;i<data.articles.length;i++)
	{
		$("#news").append(
      `<div class='col-3 mb-5 ml-4 mr-4'>
            <div class="card bg-info text-light" style="width: 18rem;height:35rem">
            <img src=${data.articles[i].urlToImage} class="card-img-top" style="width:18rem;height:15rem">
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