import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./Modules/pages/Login";
import { PaginaPrincipal } from "./Modules/pages/PaginaPrincipal";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Redirigir pagina principal */}
          <Route path="/" element={<Navigate to="/paginaprincipal" />} />
          {/* Rutas */}
          <Route path="/login" element={<Login />} />
          <Route path="/paginaprincipal" element={<PaginaPrincipal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
