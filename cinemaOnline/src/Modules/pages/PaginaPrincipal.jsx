import React from "react";
import Menu from "../../components/Menu/Menu";
import App from "../../components/Appbar/App";
import { Fondo } from "../../components/Fondo";
import "../../components/Appbar/App.css";
import "../../Style/PaginaPrincipal.css";

export function PaginaPrincipal() {
  return (
    <div className="pagina-principal">
      <Menu />
      <Fondo />
    </div>
  );
}
