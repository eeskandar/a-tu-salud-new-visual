import { useEffect, useRef, useContext } from "react";
import React from "react";
import { Context } from "../store/appContext";

export const Upload2ndImage = (props) => {
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
          actions.set2ndImg(result.info.url);
        }
      }
    );
  }, []);
  return (
    <button
      className="btn form-btn text-white"
      onClick={() => widgetRef.current.open()}
    >
      <i class="fa-solid fa-camera"></i> {props.name}
    </button>
  );
};
