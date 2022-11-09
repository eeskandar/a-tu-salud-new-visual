import React, { Component } from "react";

export const CardDonations = (props) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="container-request d-flex justify-content-between m-2">
                <div className="m-auto w-25 p-2">
                    <img className="p-2 card-pic" src={props.donations.medicine_picture} onError={({currentTarget})=>{
                currentTarget.onerror= null; //evitar looping
                currentTarget.src="https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
            }}/>
                </div>
                <div className="m-auto w-50 p-2 d-flex">
                    <div className="w-50 m-1">
                        <h5 className="mt-2 text-secondary">{props.donations.title}</h5>
                        <h6 className="text-secondary">{props.donations.active_component}</h6>
                        <p className="text-secondary">{props.donations.description}</p>
                    </div>
                    <div className="w-50 m-1">
                        <h6 className="text-secondary">Cantidad</h6>
                        <p className="text-secondary">{props.donations.quantity}</p>
                        <h6 className="text-secondary">Fecha de vencimiento</h6>
                        <p className="text-secondary">{props.donations.expiration_date}</p>
                    </div>
                </div>
                <div className="m-auto w-25 p-2">
                    <button type="button" className="btn btn-info text-white fw-bold m-1">Realizada</button>
                    <button type="button" className="btn btn-secondary text-white fw-bold m-1">Eliminar</button>
                </div>  
            </div>
        </div>
);
};
