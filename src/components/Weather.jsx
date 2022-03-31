import React from 'react'
import Background from "../images/weather.avif"
import Form from "./Form"

const Weather = () => {
  return (
    <>
     <div className='container my-3'>
         <div className='row'>
         <div className='col-md-1'></div>
            <div className='col-md-3'>
              <img className='bg--image img-fluid' src={Background}/>
             </div>
            <div className='col-md-7 data--container'>
              <Form />
            </div>
            <div className='col-md-1'></div>
        </div>
      </div>
    </>
  )
}
export default Weather;