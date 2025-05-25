from products.abstract_storage import AbstractStorage

class AzureStorage(AbstractStorage):
    def attach(self):
        print("Attaching Azure Blob Storage")