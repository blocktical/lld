from products.abstract_vm import AbstractVM

class AWSVM(AbstractVM):
    def launch(self):
        print("Launching AWS EC2 instance")