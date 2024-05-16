package com.cinema.cinema.models;

public class Generos {

    private Integer id_genero;
    private String nombre;

    public Integer getId_genero() {
        return id_genero;
    }

    public void setId_genero(Integer id_genero) {
        this.id_genero = id_genero;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Generos [id_genero=" + id_genero + ", nombre=" + nombre + "]";
    }

}
