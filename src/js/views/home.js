import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center Titular  ">
		<h1 className="display-1 fw-bold efectoOptico">Alex Fazakas</h1>
		<Link className="display-5" to="/contact">
			<h4>Check your Contacts</h4>
		</Link>
	</div>
);