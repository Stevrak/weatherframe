// load utils script before this

const weatherForm = document.getElementsByTagName('form')[0];
if (weatherForm!=null){
  const search = weatherForm.getElementsByTagName('input')[0];

  weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault();

    fetch('http://localhost:3000/ipstack?address=' + search.value).then((response) =>{
      response.json().then((data) =>{
        console.log(data.weather)
        div = document.createElement('div');
        div.innerHTML = objectDisplay(data,2);
        document.getElementById('results').appendChild(div);
      })
    })
  })
}
