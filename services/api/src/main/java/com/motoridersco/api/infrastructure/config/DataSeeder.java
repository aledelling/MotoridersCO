package com.motoridersco.api.infrastructure.config;

import com.motoridersco.api.adapters.outbound.persistence.entity.ProductEntity;
import com.motoridersco.api.adapters.outbound.persistence.repository.JpaProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class DataSeeder {

    private final JpaProductRepository productRepo;

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            String tenant = "motoriders-bogota-001";
            if (productRepo.findByTenantIdAndIsActiveTrue(tenant).isEmpty()) {
                System.out.println("🌱 SEEDING DATA FOR TENANT: " + tenant);
                
                productRepo.save(ProductEntity.builder()
                    .tenantId(tenant)
                    .name("Casco AGV K3 SV")
                    .category("Cascos")
                    .description("Casco integral deportivo.")
                    .priceCop(1250000L)
                    .stockQty(5)
                    .isActive(true)
                    .imageKey("https://images.unsplash.com/photo-1622615951556-9a572620703f?w=500")
                    .build());
                    
                productRepo.save(ProductEntity.builder()
                    .tenantId(tenant)
                    .name("Motul 7100 10W40")
                    .category("Aceites")
                    .description("100% Sintético 4T.")
                    .priceCop(85000L)
                    .stockQty(20)
                    .isActive(true)
                    .imageKey("https://m.media-amazon.com/images/I/61k8wO9+S+L._AC_SL1000_.jpg")
                    .build());
            }
        };
    }
}