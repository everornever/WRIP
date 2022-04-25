import isEmpty from 'lodash.isempty';
import {React, useState} from 'react';
import DisplayWeather from '../DisplayWeather/DisplayWeather';
function Weather({ort}) {


const [weather, setWeather] = useState([]);
const [info, setInfo] = useState([]);
 

const APIKEY = "29f32e030521b02c5cb257c4aa3c1d5e";

async function weatherData() {

      const data = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${ort[2]}&lon=${ort[3]}&units=metric&cnt=16&appid=${APIKEY}`
        // `https://api.openweathermap.org/data/2.5/weather?lat=${ort[2]}&lon=${ort[3]}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

        // setWeather([...weather, { data: data }])
      setWeather({ data: data });
      setInfo([...info, {...weather}]);
    
      console.log("info", info);
      console.log("Data", data);

}

// const data = ()=>{
//     fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${ort[2]}&lon=${ort[3]}&appid=${APIKEY}`
//         // `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
//         )
//         .then((res) => res.json())
//         .then((data) => data);

//         setWeather({ data: data })
// }
 
  return (

    <div>
        {/* <form onSubmit={weatherData}>
            <button
            type="submit"
            // onClick={}
            >
                    Start
            </button>
        </form> */}
       

        <div>
            {!isEmpty(ort)&&
                fetch(
                    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${ort[2]}&lon=${ort[3]}&units=metric&cnt=16&appid=${APIKEY}`
                  // `https://api.openweathermap.org/data/2.5/weather?lat=${ort[2]}&lon=${ort[3]}&appid=${APIKEY}`
                )
                  .then((res) => res.json())
                //   .then((data) =>  console.log("Data new", data)
                //   <DisplayWeather data={data} />
                //   )
            // !isEmpty(ort)&&
            // weatherData(),
                // <DisplayWeather data={weather.data} />
            }
          {/* <DisplayWeather data={weather.data} /> */}
        </div>
    </div>
  );
}

export default Weather
