import React, { useEffect, useState } from "react";
import getData  from "./service/api";
import Information from "./Information"

const Form = () => {

     const [data,getWeatherData] = useState();
     const [city,setCity] = useState('Rishikesh')
     const [country,setCountry] = useState('India')
     const [click ,handleClick] = useState(false)

    useEffect(() =>{
        const getWeather = async() =>{
        city && await getData(city,country).then(response => {
        getWeatherData(response.data)
        console.log(response.data)
     })
    }
    getWeather();
    handleClick(false);
        },[click]);
    
        const handleCityChange =(value) =>{
         setCity(value);
        }
        const handleCountryChange =(value) =>{
            setCountry(value);
           }
    
    return(
        <>
         <div className="row input--fields m-2">

           <div class="col-md-4 form-group">
             <input 
            onChange ={(e) => handleCityChange(e.target.value)}
             className="input--field"  
             placeholder="City" />
           </div>

           <div class=" col-md-4 form-group">
             <input 
             onChange ={(e) => handleCountryChange(e.target.value)} 
             className="input--field" 
             placeholder="Country" />
           </div>

           <div className="col-md-4 btn--div">
           <button 
           onClick= {() => handleClick(true)}
           type="button" 
           class="get--data--btn">
           GET WEATHER</button>
           </div>

          
         </div>
         <Information data={data}/>
        </>
    )
}
export default  Form;
