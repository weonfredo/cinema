package com.cinema.cinema.models;

import java.sql.Time;
import java.util.Date;

public class Horarios {

    private Integer id_horario;
    private Integer id_pelicula;
    private Integer id_sucursal;
    private Date fecha;
    private Time hora;

    public Integer getId_horario() {
        return id_horario;
    }

    public void setId_horario(Integer id_horario) {
        this.id_horario = id_horario;
    }

    public Integer getId_pelicula() {
        return id_pelicula;
    }

    public void setId_pelicula(Integer id_pelicula) {
        this.id_pelicula = id_pelicula;
    }

    public Integer getId_sucursal() {
        return id_sucursal;
    }

    public void setId_sucursal(Integer id_sucursal) {
        this.id_sucursal = id_sucursal;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Time getHora() {
        return hora;
    }

    public void setHora(Time hora) {
        this.hora = hora;
    }

    @Override
    public String toString() {
        return "Horarios [id_horario=" + id_horario + ", id_pelicula=" + id_pelicula + ", id_sucursal=" + id_sucursal
                + ", fecha=" + fecha + ", hora=" + hora + "]";
    }

}
