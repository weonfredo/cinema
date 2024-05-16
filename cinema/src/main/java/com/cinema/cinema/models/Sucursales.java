package com.cinema.cinema.models;

public class Sucursales {

    private Integer id_sucursal;
    private String nombre;
    private String direccion;
    private String ciudad;
    private Boolean estado;

    public Integer getId_sucursal() {
        return id_sucursal;
    }

    public void setId_sucursal(Integer id_sucursal) {
        this.id_sucursal = id_sucursal;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "Sucursales [id_sucursal=" + id_sucursal + ", nombre=" + nombre + ", direccion=" + direccion
                + ", ciudad=" + ciudad + ", estado=" + estado + "]";
    }

}
