import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./../store/appContext";
import { SideProfile } from "../component/SideProfile";


export const UserDonation = () => {
	return(
		<div className="d-flex justify-content-between p-0 col-11 bg-color">
			<div className="col-3 side-profile p-0">
				<SideProfile/> 
			</div>
			<div className="col-9">
                <h3 className="text-center text-secondary my-5 mt-5">Donaciones</h3>
                <div>
                    <div>
                        
                    </div>
                </div>
			</div>	
		</div>
);
};
