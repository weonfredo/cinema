package com.cinema.cinema.models;

import java.security.Timestamp;

public class Comentarios {

    private Integer id_comentario;
    private Integer id_usuario;
    private Integer id_pelicula;
    private String comentario;
    private Timestamp fecha_comentario;

    public Integer getId_comentario() {
        return id_comentario;
    }

    public void setId_comentario(Integer id_comentario) {
        this.id_comentario = id_comentario;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Integer getId_pelicula() {
        return id_pelicula;
    }

    public void setId_pelicula(Integer id_pelicula) {
        this.id_pelicula = id_pelicula;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public Timestamp getFecha_comentario() {
        return fecha_comentario;
    }

    public void setFecha_comentario(Timestamp fecha_comentario) {
        this.fecha_comentario = fecha_comentario;
    }

    @Override
    public String toString() {
        return "Comentarios [id_comentario=" + id_comentario + ", id_usuario=" + id_usuario + ", id_pelicula="
                + id_pelicula + ", comentario=" + comentario + ", fecha_comentario=" + fecha_comentario + "]";
    }

}
