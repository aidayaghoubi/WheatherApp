
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const datails = document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');

const updateDetails = (data) => {
    console.log(`thats my data ${data}`);
  
  
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructure properties 
     const {cityDets, weather} = data;
     const dataNum=weather.WeatherIcon;
     icon.setAttribute('src' , `./icons/${dataNum}.svg`);
    datails.innerHTML = `

    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
    
 
        ` ;
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none')
        }

        const dayNight=undefined;
        if(weather.IsDayTime){
            time.setAttribute('src','./icons/d.png');
        }else{
            time.setAttribute('src','./icons/m.png');
        }
}


const updateCity = async (city) => {
    console.log(city);
    const cityDets = await getCity(city);
    const weather = await getweather(cityDets.Key);
    return {
        cityDets, weather
    };
}

cityForm.addEventListener('submit', e => {

    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();
    //update ui with new city
    updateCity(city)
        .then(data => {
            updateDetails(data);
            console.log(data)
        })
});