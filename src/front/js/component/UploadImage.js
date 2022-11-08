import { useEffect, useRef, useContext } from "react";
import React from "react";
import { Context } from "../store/appContext";

export const UploadImage = (props) => {
  const { store, actions } = useContext(Context);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dcomv7wly",
        uploadPreset: "tguxxwbx",
      },
      function (error, result) {
        console.log(result);
        console.log(result.info.url);
        if (result.info.url) {
          actions.setImg(result.info.url);
        }
      }
    );
  }, []);
  return (
    <button className="btn form-btn " onClick={() => widgetRef.current.open()}>
      {props.name}
    </button>
  );
};
