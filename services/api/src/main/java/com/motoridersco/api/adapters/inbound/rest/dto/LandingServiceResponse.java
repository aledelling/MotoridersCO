package com.motoridersco.api.adapters.inbound.rest.dto;

import com.motoridersco.api.domain.model.ServiceItem;
import lombok.Data;
import java.util.UUID;

@Data
public class LandingServiceResponse {
    private UUID id;
    private String title;
    private String description;
    private String icon;

    public static LandingServiceResponse fromDomain(ServiceItem item) {
        LandingServiceResponse dto = new LandingServiceResponse();
        dto.setId(item.getId());
        dto.setTitle(item.getTitle());
        dto.setDescription(item.getDescription());
        dto.setIcon(item.getIcon());
        return dto;
    }
}