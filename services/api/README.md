# MotoRiders Co API (Backend MVP)

Backend Multitenant con Arquitectura Hexagonal.

## Setup Local
1. Variables de entorno:
   ```bash
   export DB_HOST=localhost
   export DB_USER=postgres
   export DB_PASS=password
   export SUPABASE_AUTH_URL=https://<tu-proyecto>.supabase.co/auth/v1
   ```
2. Correr: `./gradlew bootRun`

## Endpoints

**SIEMPRE** enviar header: `X-Tenant-Id: motoriders-bogota-001`

### Tienda (Público)
```bash
curl http://localhost:8080/api/public/store/products -H "X-Tenant-Id: motoriders-bogota-001"
```

### Admin Taller (Requiere JWT con rol)
El MVP simplifica roles. Para probar localmente sin Supabase completo, asegura que el backend esté en modo permisivo o usa un token válido de tu proyecto Supabase.

### Multitenancy
El sistema aísla datos por `tenant_id` en una sola BD. El contexto se maneja via `TenantFilter` y `TenantContext` (ThreadLocal).
