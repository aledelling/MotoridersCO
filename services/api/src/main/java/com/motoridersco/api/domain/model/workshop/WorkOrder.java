package com.motoridersco.api.domain.model.workshop;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;
import java.time.LocalDateTime;

@Data
@Builder
public class WorkOrder {
    private UUID id;
    private String tenantId;
    private String code;
    private String status; // OPEN, IN_PROGRESS, DONE
    private String vehiclePlate;
    private String vehicleModel;
    private LocalDateTime createdAt;
}