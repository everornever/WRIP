import { React, useState, createRef, useEffect } from "react";
import "../../App.css";
import Autocomplete from "../google-autocomplete/AutoCompelete";
import DateField from "../DateForm/DateField";
import OrteDisplay from "../ort-display/ort-display";
import isEmpty from "lodash.isempty";
import Weather from "../weather/weather";
import DisplayWeather from "../DisplayWeather/DisplayWeather";
import { Button } from "./../Frontend/Button";
import { createFileName, useScreenshot } from "use-react-screenshot";
import html2canvas from "html2canvas";
import AutoComplete from "../google-autocomplete-comp/Autocomplete";

function RoutePlaning() {
  const ref = createRef(null);

  const [inputField, setInputField] = useState({
    mapApiLoaded: null,
    mapInstance: null,
    mapApi: null,
  });
  const [orte, setOrte] = useState([]);
  const [weather, setWeather] = useState([]);
  const [date, setDate] = useState([]);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const [ready, setReady] = useState(false);
  const APIKEY = "29f32e030521b02c5cb257c4aa3c1d5e";

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  const handleOrt = (id, n, la, ln) => {
    console.log("params", n, la, ln);
    setOrte([...orte, [id, n, la, ln]]);
    console.log("Ort", orte);
  };

  const handleDelete = (id) => {
    const values = [...orte];

    const element = orte.filter((ort) => ort[0] === id);
    const index = orte.indexOf(element[0]);
    values.splice(index, 1);
    setOrte(values);
    console.log("element", element[0]);
    console.log("Index", index);
    console.log("Ort ID", id);

    const weatherValues = [...weather];
    const weatherElement = weather.filter((info) => info.id === id);
    const WeatherIndex = weather.indexOf(weatherElement[0]);
    weatherValues.splice(WeatherIndex, 1);
    setWeather(weatherValues);
    console.log("weatherElement", weatherElement[0]);
    console.log("WeatherIndex", WeatherIndex);
    console.log("Ort ID", id);
  };

  async function weatherData(place_id, la, ln) {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${la}&lon=${ln}&units=metric&cnt=16&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

    setWeather([...weather, { id: place_id, data: data }]);
  }

  const handleInput = (mapApiLoaded, mapInstance, mapApi) => {
    setInputField({
      mapApiLoaded: mapApiLoaded,
      mapInstance: mapInstance,
      mapApi: mapApi,
    });
  };

  const addPlace = (place) => {
    var lat = place.geometry.location.lat();
    var lng = place.geometry.location.lng();
    handleOrt(place.place_id, place.name, lat, lng);
    if (lat != null && lng != null) {
      weatherData(place.place_id, lat, lng);
    }
  };

  return (
    <>
      <div className="page" ref={ref}>
        <div className="nav">
          <div className="input">
            <h1>Search</h1>
            <p>Enter a location you want to visit</p>
            {inputField.mapApiLoaded && (
              <AutoComplete
                map={inputField.mapInstance}
                mapApi={inputField.mapApi}
                addplace={addPlace}
              />
            )}
          </div>
          <div className="places">
            {!isEmpty(orte) &&
              orte.map((ort) => (
                <div>
                  <div className="places_Button">
                    <button
                      className="delete"
                      id={ort[0]}
                      onClick={() => handleDelete(ort[0])}
                    >
                      X
                    </button>
                    <p key={ort[0]} id="placeName">
                      {" "}
                      {ort[1]}
                    </p>
                    <button className="edit_button">
                      <i class="uil uil-pen edit_icon"></i>
                    </button>
                  </div>
                  <p className="description">
                    Here you can see the weather for the next 16 days. Chose a
                    day when you want to arrive at that location.
                  </p>
                  {!isEmpty(weather) &&
                    weather.map(
                      (info) => (
                        console.log("Weather", weather),
                        console.log("Info", info),
                        (
                          <div>
                            {info.id === ort[0] && (
                              <div className="weather_display">
                                <DisplayWeather info={info.data} />
                              </div>
                            )}
                          </div>
                        )
                      )
                    )}
                  {}
                </div>
              ))}
          </div>
        </div>
        <div className="google_map">
          <Autocomplete handleInput={handleInput} orte={orte} />
        </div>
      </div>
    </>
  );
}

export default RoutePlaning;
