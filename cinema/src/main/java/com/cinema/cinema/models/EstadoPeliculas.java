package com.cinema.cinema.models;

public class EstadoPeliculas {

    private Integer id_estado;
    private String estado;

    public Integer getId_estado() {
        return id_estado;
    }

    public void setId_estado(Integer id_estado) {
        this.id_estado = id_estado;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "EstadoPeliculas [id_estado=" + id_estado + ", estado=" + estado + "]";
    }

}
