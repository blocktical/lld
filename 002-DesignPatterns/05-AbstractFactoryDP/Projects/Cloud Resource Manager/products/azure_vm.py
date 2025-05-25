from products.abstract_vm import AbstractVM

class AzureVM(AbstractVM):
    def launch(self):
        print("Launching Azure Virtual Machine")