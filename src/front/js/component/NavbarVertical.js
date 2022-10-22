import React from "react";
import { Link } from "react-router-dom";

export const NavbarVertical = () => {
	return (
		<>
		<div className="bg-light h-100 w-100 container-fluid sm">
			<div className="h-75 w-75 container pt-5 ps-0">		
				<a className="nav-link text-secondary p-0 my-3 justify-content-center" href="#" style={{fontSize: "10px"}}><i className="fa-solid fa-hand-holding-heart"></i> Nueva Donación</a>
				<a className="nav-link text-secondary p-0 my-3" href="#" style={{fontSize: "10px"}}><i className="fa-regular fa-square-plus"></i> Nueva Petición</a>
				<a className="nav-link text-secondary p-0 my-3" href="#" style={{fontSize: "10px"}}><i className="fa-solid fa-arrow-right-arrow-left"></i> Nuevo Intercambio</a>
				<a className="nav-link text-secondary p-0 my-3" href="#" style={{fontSize: "10px"}}><i className="fa-solid fa-envelope"></i> Mensajes</a>
				<a className="nav-link text-secondary p-0 my-3" href="#" style={{fontSize: "10px"}}><i className="fa-solid fa-circle-question"></i> Sobre Nosotros</a>	
			</div>	
			<div className="pt-5 w-75 container-fluid ps-0">
				<a className="nav-link text-secondary p-0" href="#" style={{fontSize: "10px"}}><i className="fa-solid fa-gear"></i> Configuración</a>
			</div>
		</div>	
		</>
	);
};
