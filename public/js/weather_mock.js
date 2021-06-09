// in-browser form submission tool to fetch handlebars-formatted weather data

const weatherForm = document.getElementById('weatherform');
if (weatherForm != null){
  const search = weatherForm.getElementsByTagName('input')[0];

  weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    if (search && search.value){
      fetch('http://localhost:3000/geoweather/html?address=' + search.value).then((response) =>{
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
