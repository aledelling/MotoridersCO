package com.motoridersco.api.adapters.outbound.persistence.repository;

import com.motoridersco.api.adapters.outbound.persistence.entity.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface JpaServiceRepository extends JpaRepository<ServiceEntity, UUID> {
    List<ServiceEntity> findAllByTenantId(String tenantId);
}