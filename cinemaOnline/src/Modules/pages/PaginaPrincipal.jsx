import React from "react";
import Menu from "../../components/Menu/Menu";
import App from "../../components/Appbar/App";
import { Fondo } from "../../components/Fondo";
import "../../components/Appbar/App.css";
export function PaginaPrincipal() {
  return (
    <div>
      <Fondo />
      <Menu />
    </div>
  );
}
