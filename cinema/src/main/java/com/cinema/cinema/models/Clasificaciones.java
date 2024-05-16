package com.cinema.cinema.models;

public class Clasificaciones {

    private Integer id_clasificacion;
    private String nombre;

    public Integer getId_clasificacion() {
        return id_clasificacion;
    }

    public void setId_clasificacion(Integer id_clasificacion) {
        this.id_clasificacion = id_clasificacion;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Clasificaciones [id_clasificacion=" + id_clasificacion + ", nombre=" + nombre + "]";
    }

}
