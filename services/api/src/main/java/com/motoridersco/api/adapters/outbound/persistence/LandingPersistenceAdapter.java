package com.motoridersco.api.adapters.outbound.persistence;

import com.motoridersco.api.adapters.outbound.persistence.repository.*;
import com.motoridersco.api.domain.model.*;
import com.motoridersco.api.domain.port.output.LandingRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

/**
 * MENTOR NOTE:
 * Aquí ocurre la magia de la Arquitectura Hexagonal.
 * Esta clase implementa la interfaz del Dominio, pero usa internamente los Repositorios JPA.
 * Convierte de Entidades (BD) a Modelos (Dominio).
 */
@Component
@RequiredArgsConstructor
public class LandingPersistenceAdapter implements LandingRepositoryPort {

    private final JpaServiceRepository serviceRepo;
    private final JpaProductRepository productRepo;
    private final JpaGalleryRepository galleryRepo;
    private final JpaTestimonialRepository testimonialRepo;

    @Override
    public List<ServiceItem> findAllServices(String tenantId) {
        return serviceRepo.findAllByTenantId(tenantId).stream()
                .map(e -> ServiceItem.builder()
                        .id(e.getId())
                        .tenantId(e.getTenantId())
                        .title(e.getTitle())
                        .description(e.getDescription())
                        .icon(e.getIcon())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public List<ProductItem> findFeaturedProducts(String tenantId) {
        return productRepo.findAllByTenantIdAndIsFeaturedTrue(tenantId).stream()
                .map(e -> ProductItem.builder()
                        .id(e.getId())
                        .tenantId(e.getTenantId())
                        .name(e.getName())
                        .priceCop(e.getPriceCop())
                        .category(e.getCategory())
                        .isFeatured(e.isFeatured())
                        .imageKey(e.getImageKey())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public List<GalleryItem> findAllGalleryItems(String tenantId) {
        return galleryRepo.findAllByTenantId(tenantId).stream()
                .map(e -> GalleryItem.builder()
                        .id(e.getId())
                        .tenantId(e.getTenantId())
                        .title(e.getTitle())
                        .tag(e.getTag())
                        .imageKey(e.getImageKey())
                        .description(e.getDescription())
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    public List<Testimonial> findAllTestimonials(String tenantId) {
        return testimonialRepo.findAllByTenantId(tenantId).stream()
                .map(e -> Testimonial.builder()
                        .id(e.getId())
                        .tenantId(e.getTenantId())
                        .customerName(e.getCustomerName())
                        .role(e.getRole())
                        .rating(e.getRating())
                        .comment(e.getComment())
                        .avatarUrl(e.getAvatarUrl())
                        .build())
                .collect(Collectors.toList());
    }
}