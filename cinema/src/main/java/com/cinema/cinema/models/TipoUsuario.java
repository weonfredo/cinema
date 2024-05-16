package com.cinema.cinema.models;

public class TipoUsuario {

    private Integer id_tipo_usuario;
    private String nombre;

    public Integer getId_tipo_usuario() {
        return id_tipo_usuario;
    }

    public void setId_tipo_usuario(Integer id_tipo_usuario) {
        this.id_tipo_usuario = id_tipo_usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "TipoUsuario [id_tipo_usuario=" + id_tipo_usuario + ", nombre=" + nombre + "]";
    }

}
