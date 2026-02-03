package com.motoridersco.api.adapters.outbound.persistence;

import com.motoridersco.api.adapters.outbound.persistence.entity.ProductEntity;
import com.motoridersco.api.adapters.outbound.persistence.repository.JpaProductRepository;
import com.motoridersco.api.domain.model.store.Product;
import com.motoridersco.api.domain.port.output.StoreRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class StorePersistenceAdapter implements StoreRepositoryPort {

    private final JpaProductRepository productRepo;

    @Override
    public List<Product> findProducts(String tenantId, String category) {
        List<ProductEntity> entities;
        if (category != null && !category.isBlank()) {
            entities = productRepo.findByTenantIdAndCategoryAndIsActiveTrue(tenantId, category);
        } else {
            entities = productRepo.findByTenantIdAndIsActiveTrue(tenantId);
        }
        return entities.stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Optional<Product> findProductById(String tenantId, UUID id) {
        return productRepo.findByTenantIdAndId(tenantId, id).map(this::toDomain);
    }

    @Override
    public Product saveProduct(Product product) {
        ProductEntity entity = ProductEntity.builder()
                .id(product.getId())
                .tenantId(product.getTenantId())
                .name(product.getName())
                .description(product.getDescription())
                .category(product.getCategory())
                .priceCop(product.getPriceCop())
                .stockQty(product.getStockQty())
                .isActive(product.getIsActive())
                .imageKey(product.getImageKey())
                .build();
        return toDomain(productRepo.save(entity));
    }

    private Product toDomain(ProductEntity e) {
        return Product.builder()
                .id(e.getId())
                .tenantId(e.getTenantId())
                .name(e.getName())
                .description(e.getDescription())
                .category(e.getCategory())
                .priceCop(e.getPriceCop())
                .stockQty(e.getStockQty())
                .isActive(e.getIsActive())
                .imageKey(e.getImageKey())
                .build();
    }
}