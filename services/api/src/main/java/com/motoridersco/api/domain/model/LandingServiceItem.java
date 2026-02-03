package com.motoridersco.api.domain.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LandingServiceItem {
    private Long id;
    private String title;
    private String description;
    private String iconName; 
}