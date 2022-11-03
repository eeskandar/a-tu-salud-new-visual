import React, { useState } from "react";
import "../../styles/home.css";
import { SideProfile } from "../component/SideProfile";


export const UserPost = () => {
	return(
		<div className="d-flex justify-content-between p-0 col-11 bg-color">
			<div className="col-3 side-profile p-0">
				<SideProfile/> 
			</div>
			<div className="col-9">
				<h3 className="text-center text-secondary my-5 mt-5">Nueva Donación</h3>
				<div className="d-flex px-5">
					<div className="w-50">
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Medicamento</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" readonly/>
						</div>
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Componente activo</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" readonly/>
						</div>
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Descripción de la donación</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" readonly/>
						</div>
					</div>
					<div className="w-50">	
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Presentación</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" readonly/>
						</div>
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Fecha de vencimiento</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" readonly/>
						</div>
						<div className="p-2 mx-5 my-3 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Cantidad</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" readonly/>
						</div>
					</div>
				</div>
				<div className="my-3 container text-center">
					<label for="formFileSm" className="form-label text-secondary fw-bold">
						Foto (Opcional)
					</label>
					<input className="form-control form-control-sm" id="formFileSm" type="file"/>
				</div>
				<div className="d-flex justify-content-center my-5">
					<button type="button" class="btn bg-info bg-opacity-75 btn-lg text-white fw-bold">Crear donación</button>
				</div>
			</div>
		</div>
);
};
