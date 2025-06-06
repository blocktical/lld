```mermaid
classDiagram
    class OrderFacade {
        +place_order(user_id, item_id)
    }

    class InventoryService {
        +check_item_availability(item_id)
    }

    class PaymentGateway {
        +process_payment(user_id, item_id)
    }

    class ShippingService {
        +generate_label(user_id, item_id)
    }

    class NotificationService {
        +send_confirmation(user_id, item_id)
    }

    class LoyaltyService {
        +update_points(user_id)
    }

    OrderFacade --> InventoryService
    OrderFacade --> PaymentGateway
    OrderFacade --> ShippingService
    OrderFacade --> NotificationService
    OrderFacade --> LoyaltyService
