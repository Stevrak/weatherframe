// in-browser form submission tool to fetch handlebars-formatted weather data

const weatherForm = document.getElementById('weatherform');
if (weatherForm != null){
  const search = weatherForm.getElementsByTagName('input')[0];

  weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    if (search && search.value){
      fetch('http://localhost:3000/weather/' + search.value).then((response) =>{
        response.json().then((data)=>{
          document.getElementById('results').innerHTML = data.root;

        }).catch((e)=>{
          document.getElementById('results').innerHTML = "response error: "+e;
        })
      }).catch((e)=>{console.log("fetch error");})
   }
  })
}


// test full widget insertion from fetch /weather/html
const mockButton = document.getElementById('mock_button');
if (mockButton!=null){

  mockButton.addEventListener('click',(e) =>{
    e.preventDefault();
    fetch('/weather_mock').then((response) =>{
        response.json().then((data)=>{
        document.getElementById('mock_results').innerHTML = data.root;
        })
    }).catch((e)=>{
      document.getElementById('mock_results').innerHTML = "error weatherform fetch return"//e.html;
    })
  })
}


// test iframe insertion (faster or can start loaded on page by simply placing:
// <iframe src='/weather_iframe/<empty or search term>' width='508' height='308' frameborder='0' scrolling='no'></iframe>
// into html say, on startup
const iframeForm = document.getElementById('iframeform');
if (iframeForm != null){
    //submit form with location data to retrieve weather_iframe
    iframeForm.addEventListener('submit',(e) =>{
      e.preventDefault();

      // get search value or default errors to "" to let weather_iframe locate user via ip
      let search = iframeForm.getElementsByTagName('input')[0];
      if (search) search = search.value;
      else        search = "";

      let r = document.getElementById("iframe_results");
      if (r){

        // one way is just copy this line, let DOM render
        r.innerHTML = "<iframe src='/weather_iframe/"+search+"' width='508' height='308' frameborder='0' scrolling='no'></iframe>";

        // other way is generate via DOM methods
        /*  let newframe = document.createElement("iframe");
          newframe.width="508"
          newframe.height="308"
          newframe.frameborder="0";
          newframe.scrolling="no";
          newframe.style.border= "0px";
          newframe.src = "/weather_iframe/"+search;
          r.appendChild(newframe);
          */
      }
    })
}
