import React, { Component } from "react";

export const BusquedaAvanzada = () => (
	<div className="d-flex py-5 w-100 justify-content-evenly bg-light">
		<div className="">
			<label htmlFor="" className="form-label text-secondary">Presentación</label>
			<input className="form-control m-2" type="search" placeholder="" aria-label="Search"/>
		</div>
		<div>
			<label htmlFor="" className="form-label text-secondary">Cantidad</label>
			<input className="form-control m-2" type="search" placeholder="" aria-label="Search"/>
		</div>
		<div>
			<label htmlFor="" className="form-label text-secondary">Fecha de vencimiento</label>
			<input className="form-control m-2" type="search" placeholder="" aria-label="Search"/>
		</div>
	</div>
);
