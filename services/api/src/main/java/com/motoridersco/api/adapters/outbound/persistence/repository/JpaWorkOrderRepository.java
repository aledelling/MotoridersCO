package com.motoridersco.api.adapters.outbound.persistence.repository;

import com.motoridersco.api.adapters.outbound.persistence.entity.WorkOrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface JpaWorkOrderRepository extends JpaRepository<WorkOrderEntity, UUID> {
    List<WorkOrderEntity> findByTenantId(String tenantId);
    List<WorkOrderEntity> findByTenantIdAndStatus(String tenantId, String status);
}