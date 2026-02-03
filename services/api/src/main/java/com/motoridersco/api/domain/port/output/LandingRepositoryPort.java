package com.motoridersco.api.domain.port.output;

import com.motoridersco.api.domain.model.GalleryItem;
import com.motoridersco.api.domain.model.ProductItem;
import com.motoridersco.api.domain.model.ServiceItem;
import com.motoridersco.api.domain.model.Testimonial;

import java.util.List;

/**
 * MENTOR NOTE: Puerto de Salida.
 * Define el contrato que el adaptador de persistencia debe cumplir.
 * El dominio dice "Necesito esto", y la capa de adaptadores decide CÓMO obtenerlo (JPA, SQL, Mongo, etc).
 */
public interface LandingRepositoryPort {
    List<ServiceItem> findAllServices(String tenantId);
    List<ProductItem> findFeaturedProducts(String tenantId);
    List<GalleryItem> findAllGalleryItems(String tenantId);
    List<Testimonial> findAllTestimonials(String tenantId);
}