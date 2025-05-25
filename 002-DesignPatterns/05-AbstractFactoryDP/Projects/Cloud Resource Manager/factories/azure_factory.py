from factories.abstract_factory import AbstractCloudFactory
from products.azure_vm import AzureVM
from products.azure_storage import AzureStorage

class AzureFactory(AbstractCloudFactory):
    def create_vm(self):
        return AzureVM()

    def create_storage(self):
        return AzureStorage()