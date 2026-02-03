# 🏍️ MotoRiders Co - Sistema Multitenant Fullstack

Este repositorio contiene el código fuente de una plataforma **SaaS Multitenant** para talleres de motocicletas. Incluye una Landing Page Premium (Frontend) y una API robusta (Backend) diseñada con Arquitectura Hexagonal.

---

## 🏗 Arquitectura del Proyecto

### 1. Frontend (`/src`)
*   **Tecnología**: React 18, TypeScript, Vite, TailwindCSS.
*   **Gestión de Estado**: Context API (`TenantContext` para multitenencia, `AuthContext` para sesión).
*   **Diseño**: Mobile-first, Dark Mode Premium (Negro/Verde Neón).
*   **Multitenencia**: El `TenantID` se almacena en `localStorage` y se envía automáticamente en el header `X-Tenant-Id` de cada petición HTTP mediante `apiClient.ts`.

### 2. Backend (`/services/api`)
*   **Tecnología**: Java 21, Spring Boot 3.
*   **Arquitectura**: Hexagonal (Puertos y Adaptadores).
*   **Seguridad**: OAuth2 Resource Server (Valida JWTs de Supabase).
*   **Datos**: PostgreSQL + Flyway (Migraciones).
*   **Multitenencia**: Estrategia de **Discriminator Column** (todas las tablas tienen `tenant_id`). Un filtro HTTP intercepta el request y configura el contexto.

---

## 🚀 Guía de Inicio Rápido

### Prerrequisitos
*   Node.js 18+
*   Java 21 JDK
*   Base de datos PostgreSQL
*   Cuenta en Supabase (para Auth)

### Paso 1: Configurar Backend

1.  Navega a la carpeta del backend: `cd services/api`
2.  Configura las variables de entorno (o edita `application.yml` para dev):
    ```bash
    export DB_HOST=localhost
    export DB_USER=postgres
    export DB_PASS=tu_password
    # URL de tu proyecto Supabase para validar tokens
    export SUPABASE_AUTH_URL=https://tu-id.supabase.co/auth/v1 
    ```
3.  Ejecuta la aplicación:
    ```bash
    ./gradlew bootRun
    ```
    *Esto creará automáticamente las tablas en PostgreSQL usando Flyway.*

### Paso 2: Configurar Frontend

1.  Vuelve a la raíz del proyecto.
2.  Crea un archivo `.env` basado en tus credenciales:
    ```env
    VITE_API_URL=http://localhost:8080/api
    VITE_SUPABASE_URL=https://tu-id.supabase.co
    VITE_SUPABASE_ANON_KEY=tu-anon-key
    ```
3.  Instala dependencias y corre el servidor:
    ```bash
    npm install
    npm run dev
    ```

---

## 🧪 Cómo Probar la Multitenencia

El sistema está diseñado para manejar múltiples talleres (tenants) con la misma infraestructura.

1.  **Backend**: Asegúrate de que el backend esté corriendo. Al iniciar, el `DataSeeder` insertará productos de ejemplo para el tenant `motoriders-bogota-001`.
2.  **Frontend**:
    *   Ve a `/admin/store/products`.
    *   Verás un selector de Tenant en la esquina superior derecha.
    *   Selecciona `motoriders-bogota-001`: Verás los cascos y aceites cargados.
    *   Selecciona `demo-tenant`: La lista se vaciará (aislamiento de datos correcto).

## 🔐 Autenticación

El flujo de auth es híbrido:
1.  **Frontend**: Usa el SDK de Supabase para Login/Registro (`AuthModal.tsx`).
2.  **Frontend**: Obtiene el JWT (Access Token).
3.  **Frontend**: Envía el JWT al Backend en el header `Authorization: Bearer ...`.
4.  **Backend**: Valida la firma del JWT contra Supabase y permite/deniega el acceso.

---

## 📂 Estructura de Directorios Clave

```text
/
├── src/
│   ├── components/      # UI Reusable (Header, AuthModal, Button)
│   ├── context/         # Estado Global (Auth, Tenant)
│   ├── layouts/         # Estructuras de página (AdminLayout)
│   ├── lib/             # Configuración de terceros (Supabase)
│   ├── pages/           # Vistas (Landing, Admin Dashboard)
│   ├── services/        # Cliente API (fetch wrapper)
│   └── vite-env.d.ts    # Tipos de TypeScript para Vite
│
└── services/api/        # Backend Spring Boot
    ├── domain/          # Lógica de Negocio Pura (Modelos)
    ├── application/     # Casos de Uso
    ├── adapters/        # Controladores REST y Repositorios JPA
    └── infrastructure/  # Configuración (Security, TenantFilter)
```

---

## 👨‍💻 Notas para Desarrolladores Juniors

*   **¿Por qué `import.meta.env`?**: En Vite, no existe `process.env` como en Node.js. Usamos `import.meta.env` para acceder a variables de entorno en el navegador.
*   **Context API vs Redux**: Para este tamaño de app, Context API (`useContext`) es suficiente y menos complejo que Redux para manejar el Auth y el Tenant.
*   **Prop Drilling**: Fíjate que usamos el componente `Input` dentro de formularios. Usamos `forwardRef` en `Input.tsx` para que librerías como `react-hook-form` puedan funcionar en el futuro.
