package com.cinema.cinema.models;

import java.util.Date;

public class Peliculas {

    private Integer id_pelicula;
    private String titulo;
    private String descripcion;
    private String duracion;
    private String director;
    private Integer id_genero;
    private Integer id_clasificacion;
    private String reparto;
    private Date fecha_estreno;
    private Integer id_estado;
    private String imagen_pelicula;
    private String trailer;

    public Integer getId_pelicula() {
        return id_pelicula;
    }

    public void setId_pelicula(Integer id_pelicula) {
        this.id_pelicula = id_pelicula;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public Integer getId_genero() {
        return id_genero;
    }

    public void setId_genero(Integer id_genero) {
        this.id_genero = id_genero;
    }

    public Integer getId_clasificacion() {
        return id_clasificacion;
    }

    public void setId_clasificacion(Integer id_clasificacion) {
        this.id_clasificacion = id_clasificacion;
    }

    public String getReparto() {
        return reparto;
    }

    public void setReparto(String reparto) {
        this.reparto = reparto;
    }

    public Date getFecha_estreno() {
        return fecha_estreno;
    }

    public void setFecha_estreno(Date fecha_estreno) {
        this.fecha_estreno = fecha_estreno;
    }

    public Integer getId_estado() {
        return id_estado;
    }

    public void setId_estado(Integer id_estado) {
        this.id_estado = id_estado;
    }

    public String getImagen_pelicula() {
        return imagen_pelicula;
    }

    public void setImagen_pelicula(String imagen_pelicula) {
        this.imagen_pelicula = imagen_pelicula;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    @Override
    public String toString() {
        return "Peliculas [id_pelicula=" + id_pelicula + ", titulo=" + titulo + ", descripcion=" + descripcion
                + ", duracion=" + duracion + ", director=" + director + ", id_genero=" + id_genero
                + ", id_clasificacion=" + id_clasificacion + ", reparto=" + reparto + ", fecha_estreno=" + fecha_estreno
                + ", id_estado=" + id_estado + ", imagen_pelicula=" + imagen_pelicula + ", trailer=" + trailer + "]";
    }

}
