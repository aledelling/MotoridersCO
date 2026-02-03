package com.motoridersco.api.domain.model;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;

@Data
@Builder
public class ProductItem {
    private UUID id;
    private String tenantId;
    private String name;
    private Long priceCop;
    private String category;
    private boolean isFeatured;
    private String imageKey; // URL o path de la imagen
}