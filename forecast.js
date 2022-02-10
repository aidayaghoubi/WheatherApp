// get weather 
const key = 'xR31ZcjtoVQoIypAs0EPrdgJDg6jCw1Z';
const getweather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data);
    return data[0];
};

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const resposnse = await fetch(base + query);
    const data = await resposnse.json();
    return data[0];
}


// getCity('Tehran').then(data => { return getweather(data.Key);})
// .then(data => {
//         console.log(data);
//     })
//     .catch(
//         err => console.log(err)
//     );


