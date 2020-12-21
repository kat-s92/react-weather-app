import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1>{props.data.city}</h1>

			<div className="row">
				<div className="col-6">
					<div className="clearfix">
						<div className="float-left">
							<WeatherIcon code={props.data.icon} />
						</div>
						<div classname="float-left">
							<WeatherTemp celsius={props.data.temperature} />
						</div>
					</div>
				</div>
			</div>

			<div className="col-6">
				<ul>
					<li>Humidity: {props.data.humidity}%</li>
					<li>Wind Speed: {Math.round(props.data.wind)} km/hr</li>
				</ul>
			</div>
		</div>
	);
}
