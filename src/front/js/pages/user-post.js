import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import { SideProfile } from "../component/SideProfile";


export const UserPost = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [presentation, setPresentation] = useState("");
	const [active_component, setActive_component] = useState("");
	const [expiration_date, setExpiration_date] = useState("");
	const [quantity, setQuantity] = useState("");
	const post = actions.post;
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
							<input className="form-control form-input " type="text" aria-label="readonly input example" onChange={(event) => {setTitle(event.target.value);}}/>
						</div>
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Componente activo</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" onChange={(event) => {setActive_component(event.target.value);}}/>
						</div>
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Descripción de la donación</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" onChange={(event) => {setDescription(event.target.value);}}/>
						</div>
					</div>
					<div className="w-50">	
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Presentación</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" onChange={(event) => {setPresentation(event.target.value);}}/>
						</div>
						<div className="p-2 mx-5 my-2 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Fecha de vencimiento</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" onChange={(event) => {setExpiration_date(event.target.value);}}/>
						</div>
						<div className="p-2 mx-5 my-3 text-center">
							<label htmlFor="" className="form-label text-secondary fw-bold">Cantidad</label>
							<input className="form-control form-input " type="text" aria-label="readonly input example" onChange={(event) => {setQuantity(event.target.value);}}/>
						</div>
					</div>
				</div>
				<div className="my-3 container text-center">
					<label htmlFor="formFileSm" className="form-label text-secondary fw-bold">
						Foto (Opcional)
					</label>
					<input className="form-control form-control-sm" id="formFileSm" type="file"/>
				</div>
				<div className="d-flex justify-content-center my-5">
					<button type="button" 
					className="btn bg-info bg-opacity-75 btn-lg text-white fw-bold" 
					onClick={async (e) => {
						if (title.trim() == "") {
							alert("title can't be empty");
						} else if (description.trim() == "") {
							alert("Your description can't be empty")
						} else if (presentation.trim() == "") {
							alert("Your presentation can't be empty")
						} else if (active_component.trim() == "") {
							alert("Your active component can't be empty");
						} else if (expiration_date.trim() == "") {
							alert("Your expiration date can't be empty")
						} else if (quantity.trim() == "") {
							alert("Your quantity can't be empty")
						} else {
						let success = await post(title, description, presentation, active_component, expiration_date, quantity);
						if (success == true) {
							return navigate("/user");
						}
						alert("Donación creada satisfactoriamente");
						}
					}}>
							Crear donación
					</button>
				</div>
			</div>
		</div>
);
};
