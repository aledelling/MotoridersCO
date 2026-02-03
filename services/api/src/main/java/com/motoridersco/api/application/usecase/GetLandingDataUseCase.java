package com.motoridersco.api.application.usecase;

import com.motoridersco.api.domain.model.GalleryItem;
import com.motoridersco.api.domain.model.ProductItem;
import com.motoridersco.api.domain.model.ServiceItem;
import com.motoridersco.api.domain.model.Testimonial;
import com.motoridersco.api.domain.port.output.LandingRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Orquestador de lógica de negocio.
 * En este MVP es simple passthrough, pero aquí iría lógica como caché, validaciones extra, etc.
 */
@Service // Spring Bean
@RequiredArgsConstructor // Inyección de dependencias por constructor (Lombok)
public class GetLandingDataUseCase {

    private final LandingRepositoryPort landingRepository;

    public List<ServiceItem> getServices(String tenantId) {
        return landingRepository.findAllServices(tenantId);
    }

    public List<ProductItem> getFeaturedProducts(String tenantId) {
        return landingRepository.findFeaturedProducts(tenantId);
    }

    public List<GalleryItem> getGallery(String tenantId) {
        return landingRepository.findAllGalleryItems(tenantId);
    }

    public List<Testimonial> getTestimonials(String tenantId) {
        return landingRepository.findAllTestimonials(tenantId);
    }
}