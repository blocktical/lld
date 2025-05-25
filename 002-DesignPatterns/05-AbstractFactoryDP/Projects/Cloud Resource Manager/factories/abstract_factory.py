class AbstractCloudFactory:
    def create_vm(self):
        raise NotImplementedError

    def create_storage(self):
        raise NotImplementedError