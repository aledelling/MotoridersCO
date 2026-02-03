package com.motoridersco.api.domain.port.output;

import com.motoridersco.api.domain.model.workshop.WorkOrder;
import java.util.List;

public interface WorkshopRepositoryPort {
    List<WorkOrder> findWorkOrders(String tenantId, String status);
    WorkOrder saveWorkOrder(WorkOrder workOrder);
}