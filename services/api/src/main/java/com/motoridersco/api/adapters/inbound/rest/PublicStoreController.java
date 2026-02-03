package com.motoridersco.api.adapters.inbound.rest;

import com.motoridersco.api.application.usecase.ManageStoreUseCase;
import com.motoridersco.api.domain.model.store.Product;
import com.motoridersco.api.infrastructure.multitenancy.TenantContext;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/public/store")
@RequiredArgsConstructor
public class PublicStoreController {

    private final ManageStoreUseCase storeUseCase;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts(@RequestParam(required = false) String category) {
        String tenantId = TenantContext.getTenantId();
        return ResponseEntity.ok(storeUseCase.listProducts(tenantId, category));
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable UUID id) {
        String tenantId = TenantContext.getTenantId();
        return ResponseEntity.ok(storeUseCase.getProduct(tenantId, id));
    }
}