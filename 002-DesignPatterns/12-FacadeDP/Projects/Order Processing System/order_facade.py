from subsystems.inventory import InventoryService
from subsystems.payment import PaymentGateway
from subsystems.shipping import ShippingService
from subsystems.notification import NotificationService
from subsystems.loyalty import LoyaltyService

class OrderFacade:
    def __init__(self):
        self.inventory = InventoryService()
        self.payment = PaymentGateway()
        self.shipping = ShippingService()
        self.notification = NotificationService()
        self.loyalty = LoyaltyService()

    def place_order(self, user_id, item_id):
        print("\n🛍️ Placing your order...\n")
        
        if not self.inventory.check_item_availability(item_id):
            print("Item not available.")
            return
        
        if not self.payment.process_payment(user_id, item_id):
            print("Payment failed.")
            return

        self.shipping.generate_label(user_id, item_id)
        self.notification.send_confirmation(user_id, item_id)
        self.loyalty.update_points(user_id)

        print("\n✅ Order placed successfully!\n")
