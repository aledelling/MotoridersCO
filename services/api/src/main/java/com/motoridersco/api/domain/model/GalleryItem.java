package com.motoridersco.api.domain.model;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;

@Data
@Builder
public class GalleryItem {
    private UUID id;
    private String tenantId;
    private String title;
    private String tag; // Categoría (ej: "Restauración")
    private String imageKey;
    private String description;
}