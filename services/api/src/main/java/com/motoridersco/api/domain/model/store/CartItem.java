package com.motoridersco.api.domain.model.store;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;

@Data
@Builder
public class CartItem {
    private UUID id;
    private UUID productId;
    private String productName;
    private Long priceCop;
    private Integer qty;
}