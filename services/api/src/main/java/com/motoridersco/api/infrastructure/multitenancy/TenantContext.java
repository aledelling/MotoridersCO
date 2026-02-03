package com.motoridersco.api.infrastructure.multitenancy;

/**
 * MENTOR NOTE: ThreadLocal almacena datos asociados al hilo de ejecución actual.
 * En Spring Web, cada request HTTP tiene su propio hilo.
 * Aquí guardamos el 'tenantId' para que esté disponible en Repositorios y Servicios
 * sin tener que pasarlo como parámetro en todos los métodos.
 */
public final class TenantContext {
    private static final ThreadLocal<String> CURRENT_TENANT = new ThreadLocal<>();

    public static void setTenantId(String tenantId) {
        CURRENT_TENANT.set(tenantId);
    }

    public static String getTenantId() {
        return CURRENT_TENANT.get();
    }

    // ¡CRÍTICO! Siempre limpiar al final. Los Application Servers usan Thread Pools.
    // Si no limpias, el hilo se reutiliza para otro request y podrías filtrar datos de un tenant a otro.
    public static void clear() {
        CURRENT_TENANT.remove();
    }
}