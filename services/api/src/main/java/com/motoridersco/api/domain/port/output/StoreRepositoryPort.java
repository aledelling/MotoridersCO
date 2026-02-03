package com.motoridersco.api.domain.port.output;

import com.motoridersco.api.domain.model.store.Product;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * Contrato que debe cumplir el adaptador de persistencia para la tienda.
 */
public interface StoreRepositoryPort {
    List<Product> findProducts(String tenantId, String category);
    Optional<Product> findProductById(String tenantId, UUID id);
    Product saveProduct(Product product);
    // Métodos para carrito/orden simplificados para el ejemplo
}