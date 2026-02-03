package com.motoridersco.api.adapters.outbound.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Entity
@Table(name = "testimonials", indexes = @Index(name = "idx_testimonials_tenant", columnList = "tenant_id"))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class TestimonialEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "tenant_id", nullable = false)
    private String tenantId;

    private String customerName;
    private String role;
    private int rating;
    private String comment; // @Lob si fuera muy largo, pero String está bien para MVP
    private String avatarUrl;
}