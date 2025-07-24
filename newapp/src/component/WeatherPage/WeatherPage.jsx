import { useState } from "react";
import axios from "axios";
import "./WeatherPage.css"; 

function WeatherPage() {
    const [cityData, setCityData] = useState({ city: "" });
    const [weather, setWeather] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCityData({ ...cityData, [name]: value });
    };

    const handleClick = () => {
        const API_KEY = "efa882992ef34421bbd95229251507";
        axios
            .get(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityData.city}`
            )
            .then((res) => {
                setWeather(res.data.current);
            });
    };

    console.log(weather)

    return (
        <>
            <div className="weather-container">
                <div className="weather-card card">
                    <div className="card-header">Weather Info</div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                City
                            </label>
                            <input
                                name="city"
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Search your city"
                                onChange={handleChange}
                            />
                        </div>
                        <button onClick={handleClick} className="btn">
                            Search
                        </button>
                        <div className="weather-results">
                            {weather.temp_c !== undefined && (
                                <>
                                    Temperature: {weather.temp_c}°C <br />
                                    Feel Like: {weather.feelslike_c}°C <br />
                                    <img src={weather.condition.icon} alt="weather icon" /> <br />
                                    Wind: {weather.wind_kph} km/h
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeatherPage;