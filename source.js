function f1()
{
  fetch('https://newsapi.org/v2/sources?apiKey=05ee84ea984f4ca9a011aec9c7cc5f7e')
  .then(res=>res.json())
  .then(res=>{
    console.log(res);
    display(res);
  })
}

function display(res)
{
  console.log(res);
  for(var i=0;i<res.sources.length;i++)
  {
    $("#news").append(
      `<div class='col-3 mb-5 ml-4 mr-4'>
            <div class="card bg-dark text-light" style="width: 18rem;height:20rem">
                    <div class="card-body">
                        <h4>${res.sources[i].name}</h4>
                        <h5>Country : ${res.sources[i].country}</h5>
                        <p class="card-text">${res.sources[i].description}</p>
                        <a href=${res.sources[i].url} class="btn btn-primary">Website</a>
                    </div>
                </div>
            </div>
        </div>
      `)
  }
}