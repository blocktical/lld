from products.abstract_storage import AbstractStorage

class AWSStorage(AbstractStorage):
    def attach(self):
        print("Attaching AWS S3 Bucket")