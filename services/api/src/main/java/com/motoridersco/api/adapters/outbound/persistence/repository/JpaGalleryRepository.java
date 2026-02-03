package com.motoridersco.api.adapters.outbound.persistence.repository;

import com.motoridersco.api.adapters.outbound.persistence.entity.GalleryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface JpaGalleryRepository extends JpaRepository<GalleryEntity, UUID> {
    List<GalleryEntity> findAllByTenantId(String tenantId);
}