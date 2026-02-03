package com.motoridersco.api.domain.model;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;

/**
 * MENTOR NOTE: Modelo de Dominio Puro.
 * No tiene anotaciones de Base de Datos (@Entity) ni de JSON (@JsonProperty).
 * Representa la regla de negocio, independientemente de la tecnología.
 */
@Data
@Builder
public class ServiceItem {
    private UUID id;
    private String tenantId;
    private String title;
    private String description;
    private String icon; // Nombre del icono en frontend (ej: "Wrench")
}