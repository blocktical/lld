from factories.abstract_factory import AbstractCloudFactory
from products.gcp_vm import GCPVM
from products.gcp_storage import GCPStorage

class GCPFactory(AbstractCloudFactory):
    def create_vm(self):
        return GCPVM()

    def create_storage(self):
        return GCPStorage()