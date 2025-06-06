class PaymentGateway:
    def process_payment(self, user_id, item_id):
        print(f"[Payment] Processing payment for user {user_id} and item {item_id}...")
        return True
