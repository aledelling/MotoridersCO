-- Extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Usuarios del Tenant (Roles)
CREATE TABLE tenant_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    auth_user_id VARCHAR(100) NOT NULL, -- Link a Supabase Auth (sub)
    role VARCHAR(20) NOT NULL, -- 'TENANT_ADMIN', 'CUSTOMER'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(tenant_id, auth_user_id)
);
CREATE INDEX idx_tenant_users_lookup ON tenant_users(tenant_id, auth_user_id);

-- 2. Productos
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    category VARCHAR(50),
    price_cop BIGINT NOT NULL,
    stock_qty INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    image_key TEXT
);
CREATE INDEX idx_products_tenant ON products(tenant_id);

-- 3. Perfil de Clientes (Datos propios del tenant, aparte de Auth)
CREATE TABLE customer_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    auth_user_id VARCHAR(100) NOT NULL,
    full_name VARCHAR(150),
    phone VARCHAR(20),
    email VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(tenant_id, auth_user_id)
);
CREATE INDEX idx_customer_profiles_tenant ON customer_profiles(tenant_id);

-- 4. Carrito
CREATE TABLE carts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    customer_id UUID NOT NULL REFERENCES customer_profiles(id),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_carts_customer ON carts(tenant_id, customer_id);

CREATE TABLE cart_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    cart_id UUID NOT NULL REFERENCES carts(id),
    product_id UUID NOT NULL REFERENCES products(id),
    qty INT NOT NULL
);

-- 5. Órdenes
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    customer_id UUID NOT NULL REFERENCES customer_profiles(id),
    status VARCHAR(20) NOT NULL, -- CREATED, PAID, CANCELLED
    total_cop BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_orders_tenant ON orders(tenant_id);

CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    order_id UUID NOT NULL REFERENCES orders(id),
    product_id UUID NOT NULL, -- No FK estricta por si se borra el producto (soft delete preferido)
    product_name_snapshot VARCHAR(150),
    qty INT NOT NULL,
    unit_price_snapshot BIGINT NOT NULL
);

-- 6. TALLER (Workshop)
CREATE TABLE vehicles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    customer_id UUID REFERENCES customer_profiles(id), -- Opcional, puede ser cliente sin app
    brand VARCHAR(50),
    model VARCHAR(50),
    plate VARCHAR(20) NOT NULL,
    notes TEXT,
    UNIQUE(tenant_id, plate)
);
CREATE INDEX idx_vehicles_tenant ON vehicles(tenant_id);

CREATE TABLE work_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    code VARCHAR(20) NOT NULL, -- WO-001
    vehicle_id UUID NOT NULL REFERENCES vehicles(id),
    status VARCHAR(20) NOT NULL, -- OPEN, IN_PROGRESS, DONE
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_wo_tenant ON work_orders(tenant_id);

CREATE TABLE work_order_lines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(50) NOT NULL,
    work_order_id UUID NOT NULL REFERENCES work_orders(id),
    line_type VARCHAR(20) NOT NULL, -- LABOR, PART
    description VARCHAR(200),
    qty INT DEFAULT 1,
    unit_price_cop BIGINT DEFAULT 0
);
