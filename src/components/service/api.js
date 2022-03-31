import axios from "axios";


const URL ='https://api.openweathermap.org/data/2.5/weather';
const API_Key = 'bc0df53bcf25bf5442d42b7384746a68';

const getData = async(city,country) =>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_Key}&units=metric`)
}
export default getData;