from payment_interfaces import RazorPay
from payment_adapters import LegacyBankGateway, LegacyBankAdapter

def process_payment(gateway, amount):
    print(f"Using {gateway.__class__.__name__}:")
    gateway.pay(amount)
    print()

# Use modern gateway
modern = RazorPay()
process_payment(modern, 500)

# Use legacy gateway via adapter
legacy = LegacyBankGateway()
legacy_adapter = LegacyBankAdapter(legacy)
process_payment(legacy_adapter, 500)