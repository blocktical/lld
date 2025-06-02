from payment_interfaces import PaymentGateway

# Legacy gateway with different method
class LegacyBankGateway:
    def make_payment_via_bank(self, amount):
        print(f"Paying ₹{amount} via legacy bank transfer...")

# Adapter: Converts old interface to new one
class LegacyBankAdapter(PaymentGateway):
    def __init__(self, legacy_gateway):
        self.legacy_gateway = legacy_gateway

    def pay(self, amount):
        # Adapter redirects call to legacy method
        self.legacy_gateway.make_payment_via_bank(amount)