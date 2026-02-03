package com.motoridersco.api.application.usecase;

import com.motoridersco.api.domain.model.store.Product;
import com.motoridersco.api.domain.port.output.StoreRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ManageStoreUseCase {

    private final StoreRepositoryPort storeRepository;

    public List<Product> listProducts(String tenantId, String category) {
        return storeRepository.findProducts(tenantId, category);
    }

    public Product getProduct(String tenantId, UUID id) {
        return storeRepository.findProductById(tenantId, id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    // Método Admin
    public Product createProduct(String tenantId, Product product) {
        product.setTenantId(tenantId); // Asegurar integridad
        product.setIsActive(true);
        if (product.getStockQty() == null) product.setStockQty(0);
        return storeRepository.saveProduct(product);
    }
}