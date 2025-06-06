class ShippingService:
    def generate_label(self, user_id, item_id):
        print(f"[Shipping] Generating shipping label for item {item_id} to user {user_id}...")
