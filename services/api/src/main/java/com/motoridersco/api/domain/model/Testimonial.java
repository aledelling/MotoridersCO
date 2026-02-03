package com.motoridersco.api.domain.model;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;

@Data
@Builder
public class Testimonial {
    private UUID id;
    private String tenantId;
    private String customerName;
    private String role; // ej: "Dueño de MT-09"
    private int rating; // 1-5
    private String comment;
    private String avatarUrl;
}