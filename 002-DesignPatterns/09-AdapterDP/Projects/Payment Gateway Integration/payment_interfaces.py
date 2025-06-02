class PaymentGateway:
    def pay(self, amount):
        raise NotImplementedError("pay() must be implemented.")
        
# RazorPay (modern gateway)
class RazorPay(PaymentGateway):
    def pay(self, amount):
        print(f"Paying ₹{amount} via RazorPay...")