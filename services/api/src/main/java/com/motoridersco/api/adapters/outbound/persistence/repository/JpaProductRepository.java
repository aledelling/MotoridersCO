package com.motoridersco.api.adapters.outbound.persistence.repository;

import com.motoridersco.api.adapters.outbound.persistence.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface JpaProductRepository extends JpaRepository<ProductEntity, UUID> {
    // IMPORTANTE: Siempre filtrar por tenantId
    List<ProductEntity> findByTenantIdAndIsActiveTrue(String tenantId);
    List<ProductEntity> findByTenantIdAndCategoryAndIsActiveTrue(String tenantId, String category);
    Optional<ProductEntity> findByTenantIdAndId(String tenantId, UUID id);
}