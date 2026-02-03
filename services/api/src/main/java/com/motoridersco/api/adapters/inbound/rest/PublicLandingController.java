package com.motoridersco.api.adapters.inbound.rest;

import com.motoridersco.api.adapters.inbound.rest.dto.LandingServiceResponse;
import com.motoridersco.api.application.usecase.GetLandingDataUseCase;
import com.motoridersco.api.domain.model.*;
import com.motoridersco.api.infrastructure.multitenancy.TenantContext;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/public/landing")
@RequiredArgsConstructor
public class PublicLandingController {

    private final GetLandingDataUseCase useCase;

    @GetMapping("/services")
    public ResponseEntity<List<LandingServiceResponse>> getServices() {
        String tenantId = TenantContext.getTenantId();
        List<ServiceItem> items = useCase.getServices(tenantId);
        
        // Mapeo simple de Domain -> DTO
        return ResponseEntity.ok(items.stream()
                .map(LandingServiceResponse::fromDomain)
                .collect(Collectors.toList()));
    }

    @GetMapping("/products/featured")
    public ResponseEntity<List<ProductItem>> getFeaturedProducts() {
        // Para el MVP, devolvemos el modelo de dominio directo si no es complejo
        // o si queremos ahorrar clases DTO. En proyectos grandes, usa DTOs.
        String tenantId = TenantContext.getTenantId();
        return ResponseEntity.ok(useCase.getFeaturedProducts(tenantId));
    }

    @GetMapping("/gallery")
    public ResponseEntity<List<GalleryItem>> getGallery() {
        String tenantId = TenantContext.getTenantId();
        return ResponseEntity.ok(useCase.getGallery(tenantId));
    }

    @GetMapping("/testimonials")
    public ResponseEntity<List<Testimonial>> getTestimonials() {
        String tenantId = TenantContext.getTenantId();
        return ResponseEntity.ok(useCase.getTestimonials(tenantId));
    }
}