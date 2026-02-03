package com.motoridersco.api.adapters.outbound.persistence.repository;

import com.motoridersco.api.adapters.outbound.persistence.entity.TestimonialEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface JpaTestimonialRepository extends JpaRepository<TestimonialEntity, UUID> {
    List<TestimonialEntity> findAllByTenantId(String tenantId);
}