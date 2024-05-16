import React from "react";
import "../../Style/Login.css";
import { Password, Username } from "../../components/Inputs";
import { Iniciar, Registrarse } from "../../components/ButtonLogin";

export function Login() {
  return (
    <div className="login">
      <div className="formulario mx-auto">
        <div className="R">
          <div className="cinema text-center ">
            <h1>CINEMA ONLINE</h1>
            <button>GET STARTED NOW</button>
            <p className="my-7">
              "Welcome to our online cinema! Get ready to embark on a cinematic
              journey filled with excitement, laughter, and unforgettable
              moments. Sit back, relax, and enjoy the show! 🎬🍿"
            </p>
          </div>
          <img src="https://www.shutterstock.com/image-vector/3d-cinema-movie-concept-popcorn-600nw-2255531499.jpg"></img>
        </div>
        <div className="L py-20">
          <h1 className="text-black">LOGIN YOUR ACCOUNT</h1>
          <div>
            <Username id="standard-basic" label="username" variant="Username" />
            <Password id="standard-basic" label="username" variant="Username" />
          </div>

          <div className="grid grid-cols-2">
            <div className="pr-3">
              <Iniciar />
            </div>
            <div className="pl-3">
              <Registrarse />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
