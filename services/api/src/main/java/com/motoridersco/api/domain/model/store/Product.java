package com.motoridersco.api.domain.model.store;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;

@Data
@Builder
public class Product {
    private UUID id;
    private String tenantId;
    private String name;
    private String description;
    private String category;
    private Long priceCop;
    private Integer stockQty;
    private Boolean isActive;
    private String imageKey;
}