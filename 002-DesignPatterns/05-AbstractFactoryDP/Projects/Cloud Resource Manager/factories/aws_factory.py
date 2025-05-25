from factories.abstract_factory import AbstractCloudFactory
from products.aws_vm import AWSVM
from products.aws_storage import AWSStorage

class AWSFactory(AbstractCloudFactory):
    def create_vm(self):
        return AWSVM()

    def create_storage(self):
        return AWSStorage()