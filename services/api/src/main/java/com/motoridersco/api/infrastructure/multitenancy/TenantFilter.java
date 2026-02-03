package com.motoridersco.api.infrastructure.multitenancy;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE) // Ejecutar antes que Spring Security
public class TenantFilter extends OncePerRequestFilter {

    private static final String HEADER = "X-Tenant-Id";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        String path = request.getRequestURI();
        // Ignorar rutas que no sean API (ej: actuator, health) si las hubiera
        if (!path.startsWith("/api")) {
            chain.doFilter(request, response);
            return;
        }

        String tenantId = request.getHeader(HEADER);

        if (tenantId == null || tenantId.isBlank()) {
            response.setStatus(400);
            response.getWriter().write("Missing mandatory header: X-Tenant-Id");
            return;
        }

        try {
            TenantContext.setTenantId(tenantId);
            chain.doFilter(request, response);
        } finally {
            // Limpieza obligatoria
            TenantContext.clear();
        }
    }
}