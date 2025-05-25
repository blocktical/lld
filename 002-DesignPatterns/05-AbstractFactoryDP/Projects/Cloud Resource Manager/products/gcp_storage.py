from products.abstract_storage import AbstractStorage

class GCPStorage(AbstractStorage):
    def attach(self):
        print("Attaching GCP Cloud Storage")