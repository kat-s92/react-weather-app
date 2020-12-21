import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	function handleForecast(response) {
		setForecast(response.data);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast row">
				<WeatherForecastPreview data={forecast.list[0]} />
				<WeatherForecastPreview data={forecast.list[1]} />
				<WeatherForecastPreview data={forecast.list[2]} />
				<WeatherForecastPreview data={forecast.list[3]} />
				<WeatherForecastPreview data={forecast.list[4]} />
			</div>
		);
	} else {
		let apiKey = "c47639a679e866341924ab987bd35847";
		let url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
		axios.get(url).then(handleForecast);
		return null;
	}
}
