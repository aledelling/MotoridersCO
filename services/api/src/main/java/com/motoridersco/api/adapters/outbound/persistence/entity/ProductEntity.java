package com.motoridersco.api.adapters.outbound.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Entity
@Table(name = "products")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "tenant_id", nullable = false)
    private String tenantId;

    private String name;
    private String description;
    private String category;
    private Long priceCop;
    private Integer stockQty;
    
    @Column(name = "is_active")
    private Boolean isActive;
    
    private String imageKey;
}