import React, { Component } from "react";

export const CardDonations = (props) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="container-request d-flex justify-content-between m-2">
                <div className="m-auto w-25 p-2">
                    <img className="p-2" src={`${props.donations.medicine_picture}`} style={{ height: "130px" }} onError={({currentTarget})=>{
                currentTarget.onerror= null; //evitar looping
                currentTarget.src="https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
            }}/>
                </div>
                <div className="m-auto w-50 p-2">
                    <h5 className="mt-2 text-secondary">{props.donations.title}</h5>
                    <h6 className="text-secondary">{props.donations.active_component}</h6>
                    <p className="text-secondary">{props.donations.description}</p>
                </div>
                <div className="m-auto w-25 p-2">
                    <h6 className="text-secondary">Cantidad</h6>
                    <p className="text-secondary">{props.donations.quantity}</p>
                    <h6 className="text-secondary">Fecha de vencimiento</h6>
                    <p className="text-secondary">{props.donations.expiration_date}</p>
                </div>  
            </div>
        </div>
);
};
